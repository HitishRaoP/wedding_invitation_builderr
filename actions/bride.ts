"use server"
import { db } from "@/lib/db"
import { brideSchema } from "@/schemas"
import * as z from "zod"

export async function BrideUpdate(invitationId: string, values: z.infer<typeof brideSchema>) {

    const validatedFields = brideSchema.safeParse(values)
    
    if (!validatedFields.success) {
        return {
            error: "Invalid input"
        }
    }
    const {
        brideBio, bridePhoto } = validatedFields.data;

    await db.invitation.update({
        where: {
            id: invitationId
        },
        data: {
            brideSrc: bridePhoto || "",
            brideText: brideBio || ""
        }
    })
    return {
        success: "Bride Details Updated Successfully"
    }
}
