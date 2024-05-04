import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Comic_Neue, Handlee, Neucha } from "next/font/google"
import { ScrollArea } from "../ui/scroll-area"
import { ImageInput } from "../image-input"

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"]
})

const neucha = Neucha({ subsets: ["latin"],
  weight: ["400"]
 })

export function Invite() {
  return (
    <Card className="h-fit my-8">
      <CardHeader>
        <CardTitle
        className={cn("text-5xl text-blue-900", neucha.className)}>Wedding Invitation</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 items-center p-0">
        <CardContent>
        <ImageInput
        src="/template.png"
        alt="invite-photo" />
        </CardContent>
        <ScrollArea className={cn("h-[600px] py-4 pt-0", handlee.className)}>
          <CardContent className="p-0 text-2xl flex flex-col h-full justify-between items-start">
            <CardContent className="pt-0 mt-0 text-4xl">
              Hannah
              &
              Noah
            </CardContent>
            <CardContent className="">
              Date : sat 22 2022
            </CardContent>
            <CardContent className="">
              Day : Sunday
            </CardContent>
            <CardContent className="">
              Time : 7:00 PM
            </CardContent>
            <CardContent className="">
              Venue : 123 Anywhere St., Any City, ST 12345
            </CardContent>
            <CardContent className="">
              Other Details : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sit ipsam reprehenderit earum eius autem Illum reprehenderit consequatur explicabo voluptas alias aliquid omnis veniam unde quos facilis qui facere, impedit accusantium eos dignissimos eius porro voluptates totam amet ratione nihil odio?
            </CardContent>
          </CardContent>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
