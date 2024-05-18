"use server"
import { db } from "@/lib/db"
import { groomSchema } from "@/schemas"
import * as z from "zod"

export async function groomUpdate(invitationId: string, values: z.infer<typeof groomSchema>) {
    const validatedFields = groomSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid input"
        }
    }

    const {
        groomBio, groomPhoto } = validatedFields.data;

    await db.invitation.update({
        where: {
            id: invitationId
        },
        data: {
            groomSrc: groomPhoto || "",
            groomText: groomBio || ""
        }
    })
    return {
        success: "Groom Details Updated Successfully"
    }
}
