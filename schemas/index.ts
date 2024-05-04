import { z } from "zod"

export const inviteSchema = z.object({
    "Bride Name": z.string().min(1),
    "Bride Father Name" : z.string().min(1),
    // "Bride Mother Name" : z.string().min(1),
    // "Bride Relatives" : z.string(),
    // "About Bride" : z.string().min(1),
    // "About Bride's Father" : z.string().min(1),
    // "About Bride's Mother" : z.string().min(1),
    // "About Bride's Relatives" : z.string(),
    // "Groom Name": z.string().min(1),
    // "Groom Father Name" : z.string().min(1),
    // "Groom Mother Name" : z.string().min(1),
    // "Groom Relatives" : z.string(),
    // "About Groom" : z.string(),
    // "About Groom's Father" : z.string(),
    // "About Groom's Mother" : z.string(),
    // "About Groom's Relatives" : z.string(),
    // "Date": z.string(),
    // "Day": z.string(),
    // "Time" : z.string(),
    // "Venue" : z.string(),
    // "Location" : z.string(), 
})

export const locationSchema = z.object({
    location: z.string().min(1,{
        message : "Please enter location"
    })
})

export const brideSchema = z.object({
    brideBio: z.string().min(1,{
        message : "Please enter some information"
    },
),
    bridePhoto: z.string().min(1,{
        message : "Please submit a photo"
    })
})

export const groomSchema = z.object({
    groomBio: z.string().min(1,{
        message : "Please enter some information"
    },
),
    groomPhoto: z.string().min(1,{
        message : "Please submit a photo"
    })
})