import { z } from "zod"

export const locationSchema = z.object({
    location: z.string().min(1, {
        message: "Please enter location"
    })
})

export const brideSchema = z.object({
    brideBio: z.string().min(0, {
        message: "Please enter some information"
    },
    ),
    bridePhoto: z.string().min(0, {
        message: "Please submit a photo"
    })
})

export const groomSchema = z.object({
    groomBio: z.string().min(1, {
        message: "Please enter some information"
    },
    ),
    groomPhoto: z.string().min(1, {
        message: "Please submit a photo"
    })
})

export const inviteSchema = z.object({
    brideName: z.string().min(1,
        {
            message: "Please enter Bride's name"
        }
    ),
    groomName: z.string().min(1,
        {
            message: "Please enter Groom's name"
        }
    ),
    date: z.string().min(1,
        {
            message: "Please enter a Date"
        }
    ),
    day: z.string().min(1, {
        message: "Please enter day"
    }),
    time: z.string().min(1, {
        message: "Please enter time"
    }),
    location: z.string().min(1,
        {
            message: "Please enter Location"
        }
    ),
    couplesPhoto: z.string().min(1, {
        message: "Please submit couple's photo"
    })
})

export const createSchema = z.object({
    projectName: z.string().min(1, {
        message: "Please enter project name"
    }),
    couplesSrc: z.string().min(1, {
        message: "Please submit couple's photo"
    }),
    brideName: z.string().min(1, {
        message: "Please enter bride's name"
    }),
    groomName: z.string().min(1, {
        message: "Please enter groom's name"
    }),
    date: z.string().min(1, {
        message: "Please enter Date"
    }),
    day: z.string().min(1, {
        message: "Please enter Day"
    }),
    time: z.string().min(1, {
        message: "Please enter time"
    }),
    location: z.string().min(1, {
        message: "Please enter location"
    }),
    brideSrc: z.string().min(1, {
        message: "Please submit bride's photo"
    }),
    groomSrc: z.string().min(1, {
        message: "Please submit groom's photo"
    }),
    brideText: z.string().min(1, {
        message: "Please enter bride's Information"
    }),
    groomText: z.string().min(1, {
        message: "Please enter groom's Information"
    }),
})


export const userSchema = z.object({
    clerkId: z.string(),
    username: z.string(),
    email: z.string().email(),
    photo: z.string(),
})


export const razorpaySchema = z.object({
    razorpayOrderId: z.string().min(1),
    razorpayPaymentId: z.string().min(1),
    razorpaySignature: z.string().min(1)
})

export const feedbackSchema = z.object({
    name: z.string().min(1,
        {
            message: "Please enter your name"
        }
    ),
    email: z.string().email(),
    feedback: z.string().min(5, {
        message: "Please enter atleast 5 characters"
    })
})