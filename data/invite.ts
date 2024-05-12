"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

export async function getInvitesByClerkId() {

    const id = await db.user.findUnique({
        where: {
            clerkId: auth().userId || ''
        },
        select:
        {
            id: true
        }
    })

    const user = await db.user.findUnique({
        where: {
            id: id?.id || ""
        },
        select: {
            invitations: {
                select: {
                    couplesSrc: true,
                    brideName: true,
                    groomName: true,
                    date: true,
                    day: true,
                    time: true,
                    location: true,
                    brideSrc: true,
                    groomSrc: true,
                    brideText: true,
                    groomText: true,
                    projectName: true,
                    id: true,
                    razorpay: {
                        select: {
                            razorpayOrderId: true,
                            razorpayPaymentId: true,
                            razorpaySignature: true
                        }
                    }
                }
            },
        }
    })
    return user

}