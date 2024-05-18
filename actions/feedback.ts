"use server"

import { db } from "@/lib/db"
import { feedbackSchema } from "@/schemas"
import { auth } from "@clerk/nextjs/server"
import { z } from "zod"

export const createFeedback = async (values: z.infer<typeof feedbackSchema>) => {

    const validatedFields = feedbackSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid input"
        }
    }

    const clerkId = await auth().userId || ''

    const id = await db.user.findUnique({
        where: {
            clerkId: clerkId
        },
        select: {
            id: true
        }
    })

    const { name, email, feedback } = validatedFields.data;

    await db.feedback.create({
        data: {
            name,
            email,
            feedback,
            authorId: id?.id
        }
    })

    return {
        success: "Feedback Submitted Successfully"
    }
}