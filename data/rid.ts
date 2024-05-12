"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

export const getRid = async () => {
    const clerkId = auth().userId || ''
    const id = await db.user.findUnique({
        where: {
            clerkId: clerkId
        },
        select: {
            id: true
        }
    })

    return await db.user.findUnique({
        where: {
            id: id?.id
        },
        select: {
            invitations: {
                select: {
                    razorpay: {
                        select: {
                            razorpaySignature: true
                        }
                    }
                },
            }
        }
    })
}