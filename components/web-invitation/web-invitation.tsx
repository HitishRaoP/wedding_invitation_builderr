"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { usePersonStore } from "@/state/state"
import { Location } from "./location"
import { Bride } from "./bride"
import { Groom } from "./groom"
import { Invite } from "./invite"

export const WebInvitation = () => {
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
                <Invite />
            </TabsContent>
            <TabsContent value="Location">
                <Location />
            </TabsContent>
            <TabsContent value="Bride">
                <Bride />
            </TabsContent>
            <TabsContent value="Groom">
                <Groom />
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

    )
}