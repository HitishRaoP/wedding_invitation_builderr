import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent, clerkClient } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {

  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }


  if (evt.type === 'user.created' || evt.type === 'user.updated') {
    const { id, username, email_addresses } = evt.data
    //Directly updating the database without external functions
    await db.user.upsert({
      where: {
        clerkId: id
      },
      create: {
        clerkId: id,
        username: username!,
        email: email_addresses[0].email_address
      },
      update: {
        clerkId: id,
        username: username!,
        email: email_addresses[0].email_address,
      },
    })

  }

  if (evt.type === 'user.deleted') {

    await db.user.delete(
      {
        where:
          { clerkId: evt.data.id }
      })

  }



  return new Response('', { status: 200 })
}