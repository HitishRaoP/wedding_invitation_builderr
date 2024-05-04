import Image from 'next/image'

interface ImageInputProps {
    src: string
    alt : string
}
export function ImageInput(
    {
        src,
        alt
    }: ImageInputProps
) {
    return (
        <div className="w-full h-[600px]">
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                className="rounded-lg w-full h-full" />
        </div>
    )
}
