import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface ImageInputProps {
    src: string
    alt: string
}
export function ImageInput(
    {
        src,
        alt
    }: ImageInputProps
) {
    return (
        <AspectRatio className='' ratio={2 / 1}>
            <Image
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                className="rounded-lg w-full h-full object-fill " />
        </AspectRatio>
    )
}
