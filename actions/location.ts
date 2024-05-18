"use server"
import { db } from "@/lib/db"
import { locationSchema } from "@/schemas"
import * as z from "zod"

export async function locationUpdate(invitationId: string, values: z.infer<typeof locationSchema>) {
  const validatedFields = locationSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: "Invalid input"
    }
  }

  const { location } = validatedFields.data;

  await db.invitation.update({
    where: {
      id: invitationId
    },
    data: {
      location: location || ""
    }
  })

  return {
    success: "Location Updated Successfully"
  }
}

