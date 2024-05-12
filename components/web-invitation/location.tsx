"use client"

import { LocationUpdateForm } from "./location-update-form";
import { usePathname } from "next/navigation";

interface LocationProps {
    location: string
}
export function Location(
    {
        location
    }: LocationProps
) {

    const pathname = usePathname();
    return (
        <div className="space-y-4">
            {
                pathname.includes("edit") && (
                    <LocationUpdateForm />
                )
            }
            <div className="">
                <div id="canvas-for-googlemap">
                    <iframe
                        className="rounded-lg"
                        width="100%"
                        height={"600"}
                        src={`https://www.google.com/maps/embed/v1/place?q=${location || "india"}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}
