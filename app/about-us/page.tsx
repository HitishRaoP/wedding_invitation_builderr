import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function AboutUs() {
  return (
    <>
    <Navbar/>
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-green-500">
          ABOUT US
        </CardTitle>
      </CardHeader>
      </Card>
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-lime-500">
          UNREALON
        </CardTitle>
      </CardHeader>
      <CardContent>
        The main aim of unrealon is to provide simpler solutions to already existing complex solutions at the lowest price possible
      </CardContent>
      <CardContent>
       The first ever product of unrealon is a website wedding invitation builder which helps anyone to create a perfect Website Wedding Invitation at anytime which would otherwise require coding skills or designing skills.
      </CardContent>
    </Card>
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-lime-500">
          Products and services
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="">
          <li>
            Website weddings Invitation builder
          </li>
          <li>Lowest cost of ₹2500 / Website Wedding Invitation</li>
          <li>Edit your wedding invitations as many times as you want</li>
          <li>Personalised Dashboard where you can view all your invitations</li>
        </ul>
      </CardContent>
    </Card>
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-green-500">
        More products coming soon...
        </CardTitle>
      </CardHeader>
    </Card>
    </>
  )
}

export default AboutUs