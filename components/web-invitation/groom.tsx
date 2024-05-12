import { GroomUpdateForm } from "./groom-update-form"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SparklesText } from "../particles"
import { ImageInput } from "../image-input"
import { usePathname } from "next/navigation"

interface GroomProps {
    name: string,
    src: string,
    alt: string
    text: string
}
export function Groom(
    {
        name,
        src,
        alt,
        text
    }: GroomProps
) {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-4">
            {
                pathname.includes("edit") && (
                    <GroomUpdateForm />
                )
            }
            <Card className="h-fit">
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center p-0">
                    <CardContent className="w-full h-full">
                        <ImageInput
                            src={src}
                            alt={alt} />
                    </CardContent>
                    <CardContent className="w-full h-full">
                        <SparklesText
                            text={text} />
                    </CardContent>
                </CardContent>
            </Card>
        </div>
    )
}
