import { Navbar } from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoIosCheckmark } from "@/components/ui/icons";

const featuresList = [
  "Custom Dashboard",
  "Modern Invitation",
  "Location Page",
  "Bride Page",
  "Groom Page",
]
function Pricing() {
  return (
    <>
    <Navbar />
    <Card className="h-fit my-8 text-md w-fit shadow-sm">
      <CardHeader className="flex flex-col gap-4 text-center text-green-800">
        <CardTitle>WEBSITE WEDDING INVITATION</CardTitle>
        <CardDescription>Create modern website wedding invitations in minutes</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 px-0">
        <CardContent className="w-full px-4">
          {
            featuresList.map((feature, index) => {
              return (
                <div className="flex gap-2 items-center justify-start w-full my-2" key={index} >
                  <IoIosCheckmark className="w-6 h-6 sm:w-10 sm:h-10 text-green-600" />
                  <span className=" ">{feature}</span>
                </div>)
            })
          }
        </CardContent>
        <CardContent className="w-full">
          <div className="text-md sm:text-lg bg-lime-200 rounded-lg p-4 text-center shadow-md border boder-lime-300">
            ₹2500 / Website Wedding Invitation
          </div>
        </CardContent>
      </CardContent>
    </Card>
    </>
  )
}

export default Pricing