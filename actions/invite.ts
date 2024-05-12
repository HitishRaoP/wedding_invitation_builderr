"use server"
import { db } from "@/lib/db"
import { inviteSchema } from "@/schemas"
import * as z from "zod"

export async function InviteUpdate(invitationId: string, values: z.infer<typeof inviteSchema>) {
    const validatedFields = inviteSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid input"
        }
    }

    const {
        brideName,
        groomName,
        date,
        day,
        time,
        location,
        couplesPhoto, } = validatedFields.data;

    await db.invitation.update({
        where: {
            id: invitationId
        },
        data: {
            brideName: brideName || "",
            groomName: groomName || "",
            date: date || "",
            day: day || "",
            time: time || "",
            location: location || "",
            couplesSrc: couplesPhoto || ""
        }
    })
    return {
        success: "Invitation updated successfully"
    }
}
