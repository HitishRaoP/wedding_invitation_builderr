import { GroomUpdateForm } from "./groom-update-form"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {SparklesText } from "../particles"
import { ImageInput } from "../image-input"
export function Groom() {
    return (
        <div className="flex flex-col">
            <GroomUpdateForm />
            <Card className="h-fit my-8">
                <CardHeader>
                    <CardTitle>Groom Name</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 items-center p-0">
                    <CardContent>
                        <ImageInput
                            src="/template.png"
                            alt="groom-photo" />
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
