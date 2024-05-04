"use client"
import { usePersonStore } from "@/state/state";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { locationSchema } from "@/schemas";
import { LocationUpdateForm } from "./location-update-form";


export function Location() {
    const { location, updateLocation } = usePersonStore();

    const form = useForm({
        resolver: zodResolver(locationSchema),
        defaultValues: {
            location: ""
        }
    })
    const onSubmit = (values: z.infer<typeof locationSchema>) => {
        console.log(values)
    }
    return (
        <div className="space-y-4 mb-8">
        <LocationUpdateForm />
            <div>
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
