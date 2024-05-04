import { ImageInput } from "@/components/image-input"
import { SparklesText } from "@/components/particles"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

function Pricing() {
  return (
    <Card className="h-fit my-8">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 items-center p-0">
        <CardContent>
          <ImageInput
            src="/template.png"
            alt="groom-photo" />
        </CardContent>
        <CardContent>
          <SparklesText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </CardContent>
      </CardContent>
    </Card>

  )
}

export default Pricing