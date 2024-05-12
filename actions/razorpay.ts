"use server"
import { db } from "@/lib/db"
import { razorpaySchema } from "@/schemas"
import * as z from "zod"

export async function CreateRazorpayDetails(pid: string, values: z.infer<typeof razorpaySchema>) {
  const validatedFields = razorpaySchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: "Invalid input"
    }
  }

  const {
    razorpayOrderId, razorpayPaymentId, razorpaySignature } = validatedFields.data;

  await db.razorPay.create({
    data: {
      invitationId: pid,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    }
  })

  return {
    success: "You can now view and edit your project details"
  }

}
