"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Location } from "./location"
import { Bride } from "./bride"
import { Groom } from "./groom"
import { Invite } from "./invite"

interface WebInvitationProps {
    coupleSrc: string
    brideName: string
    groomName: string
    date: string
    day: string
    time: string
    location: string
    brideSrc: string
    groomSrc: string
    brideText: string
    groomText: string
}
export const WebInvitation = (
    {
        coupleSrc,
        brideName,
        groomName,
        date,
        day,
        time,
        location,
        brideSrc,
        groomSrc,
        brideText,
        groomText
    }: WebInvitationProps
) => {

    const tabsList =
        [
            "Invite",
            "Location",
            "Bride",
            "Groom"
        ]

    return (
        <Tabs defaultValue="Invite" className="w-full">
            <TabsList>
                {
                    tabsList.map(tab =>
                        <TabsTrigger
                            key={tab}
                            value={tab}>
                            {tab}
                        </TabsTrigger>
                    )
                }
            </TabsList>
            <TabsContent value="Invite" className="w-full">
                <Invite
                    src={coupleSrc}
                    alt={brideName + groomName}
                    bridename={brideName}
                    groomname={groomName}
                    date={date}
                    day={day}
                    time={time}
                    location={location}
                />
            </TabsContent>
            <TabsContent value="Location">
                <Location
                    location={location} />
            </TabsContent>
            <TabsContent value="Bride">
                <Bride
                    name={brideName}
                    alt={brideName}
                    src={brideSrc}
                    text={brideText} />
            </TabsContent>
            <TabsContent value="Groom">
                <Groom
                    name={groomName}
                    alt={groomName}
                    src={groomSrc}
                    text={groomText} />
            </TabsContent>
        </Tabs>
    )
}