"use server"

import { db } from "@/lib/db";
import { utapi } from "@/server/uploadthing";
export async function deleteInvitation(rid: string, invitationId: string) {

    //Deleting files from uploadthing
    const links = await db.invitation.findMany({
        where: {
            id: invitationId
        },
        select: {
            couplesSrc: true,
            brideSrc: true,
            groomSrc: true
        }
    })

    const files: string[] = []
    links.map((a) => a.couplesSrc && a.brideSrc && a.groomSrc && files.push(a.couplesSrc.replace("https://utfs.io/f/", ""), a.brideSrc.replace("https://utfs.io/f/", ""), a.groomSrc.replace("https://utfs.io/f/", "")))

    await utapi.deleteFiles(files);

    //Deleting Razorpay details
    const razorPayId = await db.invitation.findUnique({
        where: {
            id: invitationId
        },
        select: {
            razorpay: {
                select: {
                    id: true
                }
            }
        }
    })

    razorPayId?.razorpay.map(a => a.id)[0] ? (await db.razorPay.delete({
        where: {
            id: razorPayId?.razorpay.map(a => a.id)[0]
        }
    })) : null

    //Deleting Invitation
    await db.invitation.delete({
        where: {
            id: invitationId,
        },
    })
}