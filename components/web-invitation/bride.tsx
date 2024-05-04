import Image from "next/image"
import { BrideUpdateForm } from "./bride-update-form"
import { SparklesText } from "../particles"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ImageInput } from "../image-input"
export function Bride() {
    return (
        <div className="flex flex-col">
            <BrideUpdateForm />
            <Card className="h-fit my-8">
                <CardHeader>
                    <CardTitle>Bride Name</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 items-center p-0">
                    <CardContent>
                        <ImageInput
                            src="/template.png"
                            alt="bride-photo" />
                    </CardContent>
                    <CardContent>
                        <SparklesText
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ducimus." />
                    </CardContent>
                </CardContent>
            </Card>
        </div>


    )
}
