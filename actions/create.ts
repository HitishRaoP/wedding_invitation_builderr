"use server"
import { db } from "@/lib/db"
import { createSchema } from "@/schemas"
import { auth } from "@clerk/nextjs/server"
import * as z from "zod"

export async function Create(values: z.infer<typeof createSchema>) {
  const validatedFields = createSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: "Invalid input"
    }
  }

  const {
    projectName,
    couplesSrc,
    brideName,
    groomName,
    date,
    day,
    time,
    location,
    brideSrc,
    groomSrc,
    brideText,
    groomText } = validatedFields.data;

  const clerkId = await auth().userId || ''

  const id = await db.user.findUnique({
    where: {
      clerkId: clerkId
    },
    select: {
      id: true
    }
  })

  await db.invitation.create({
    data: {
      projectName: projectName as string,
      couplesSrc: couplesSrc as string,
      brideName: brideName as string,
      groomName: groomName as string,
      date: date as string,
      day: day as string,
      time: time as string,
      location: location as string,
      brideSrc: brideSrc as string,
      groomSrc: groomSrc as string,
      brideText: brideText as string,
      groomText: groomText as string,
      author: {
        connect: {
          id: id?.id
        }
      }
    }
  })

  return {
    success: "Website Details Created Successfully"
  }

}
