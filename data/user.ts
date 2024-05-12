"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server";

export async function getUserByClerkId() {

    const clerkId = auth().userId || ''

    return await db.user.findUnique({
        where: {
            clerkId: clerkId
        },
        select: {
            id: true
        }
    })
}