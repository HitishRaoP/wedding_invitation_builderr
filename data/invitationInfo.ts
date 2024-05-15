"use server"

import { db } from "@/lib/db"

export const getInvitationInfo = async (invitationId: string) => {
    return await db.invitation.findUnique({
        where: {
            id: invitationId
        },
        select: {
            couplesSrc: true,
            brideName: true,
            groomName: true,
            date: true,
            day: true,
            location: true,
            time: true,
            brideSrc: true,
            groomSrc: true,
            brideText: true,
            groomText: true,
        }
    })
}