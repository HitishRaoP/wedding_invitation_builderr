import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export function LandingPage() {
  return (
    <div className="flex flex-col gap-16">
      <Card className="flex flex-col items-center border-0 justify-center h-[calc(100vh_-_110px)]">
        <CardHeader>
          <CardTitle className="sm:text-3xl md:text-5xl text-center">
            Create modern <span className="text-lime-600">Website Wedding Invitations</span> in minutes
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-md">
          Invite your guests through your own website created in minutes
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center border-none justify-center h-screen">
        <CardTitle className="text-center my-12 text-3xl ">Personalised Dashboard</CardTitle>
        <CardContent className="flex flex-col sm:flex-row w-full">
          <CardContent className="text-center w-full">
            <AspectRatio ratio={3 / 1}>
              <Image
                className="w-full h-full border rounded-md"
                src={'/dashboard.png'}
                alt="dashboard"
                width={2000}
                height={2000} />
            </AspectRatio>
          </CardContent>
          <CardContent className="text-xl flex items-center justify-center text-center">
            <span>
              Easily <span className="text-lime-500">create</span>, <span className="text-amber-500">update</span> or <span className="text-red-500">delete</span> your invitations in minutes</span>
          </CardContent>
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center border-none justify-center h-screen">
        <CardTitle className="text-center my-12 text-3xl ">Personalised Website Link</CardTitle>
        <CardContent className="flex flex-col sm:flex-row w-full">
          <CardContent className="text-center w-full">
            <AspectRatio ratio={3 / 1}>
              <Image
                className="w-full h-full border rounded-md"
                src={'/link.png'}
                alt="dashboard"
                width={2000}
                height={2000} />
            </AspectRatio>
          </CardContent>
          <CardContent className="text-xl flex items-center justify-center text-center">
            <span>
              Get you <span className="text-lime-500 font-bold">Own Website Link </span> which you can share to your guests</span>
          </CardContent>
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center border-none justify-center h-screen">
        <CardTitle className="text-center my-12 text-3xl ">Edit Your Invitations Any Time</CardTitle>
        <CardContent className="text-xl flex items-center justify-center text-center">
          <span className="text-center"> <span className="text-red-500 font-bold text-2xl"> Spelling mistakes?</span> Don&apos;t worry you can edit them any time and as many times </span>
        </CardContent>
      </Card>

    </div>
  );
}


