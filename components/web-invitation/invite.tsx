import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Handlee, Neucha } from "next/font/google"
import { ScrollArea } from "../ui/scroll-area"
import { ImageInput } from "../image-input"
import { InviteUpdateForm } from "./invite-update-form"
import { usePathname } from "next/navigation"

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"]
})

const neucha = Neucha({
  subsets: ["latin"],
  weight: ["400"]
})

interface InviteProps {
  bridename: string
  groomname: string
  date: string
  day: string
  time: string
  location: string
  src: string
  alt: string
}

export function Invite(
  {
    bridename,
    groomname,
    date,
    day,
    time,
    location,
    src,
    alt
  }: InviteProps
) {
  const pathname = usePathname();



  return (
    <div className="space-y-4">
      {
        pathname.includes("edit") && (
          <InviteUpdateForm />
        )
      }
      <Card className="h-fit">
        <CardHeader>
          <CardTitle
            className={cn("text-3xl sm:text-5xl text-blue-900", neucha.className)}>Wedding Invitation</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center p-0">
          <CardContent className="w-full h-full">
            <ImageInput
              src={src}
              alt={alt} />
          </CardContent>
          <ScrollArea className={cn("h-fit py-4 pt-0", handlee.className)}>
            <CardContent className="p-0 text-2xl flex flex-col h-full justify-between items-start">
              <CardContent className="sm:font-bold pt-0 mt-0 text-3xl sm:text-4xl text-center text-amber-500">
                {bridename + " and "}
                {groomname}
              </CardContent>
              <CardContent>
                <span className="text-blue-700 font-bold">Date</span> : {date}       </CardContent>
              <CardContent>
                <span className="text-blue-700 font-bold">Day</span>  : {day}       </CardContent>
              <CardContent>
                <span className="text-blue-700 font-bold">Time</span>  : {time}
              </CardContent>
              <CardContent>
                <span className="text-blue-700 font-bold">Venue</span> : {location}
              </CardContent>
            </CardContent>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
