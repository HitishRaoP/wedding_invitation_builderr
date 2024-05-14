import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import { CompanyLogo } from "./company-logo";
import Link from "next/link";
import { Button } from "./ui/button";

const list = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "About Us",
        href: "/about-us",
    },
    {
        name: "Contact Us",
        href: "/contact",
    }
]
export function Sidebar() {
    return (
        <Sheet  >
            <SheetTrigger>
                <RxHamburgerMenu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-4">
                        <CompanyLogo />
                        <span>Unrealon</span>
                    </SheetTitle>
                    <SheetDescription className="flex flex-col gap-4 py-4">
                        {
                            list.map((item) => (
                                <Button variant={'ghost'} className="text-lg flex justify-start m-0 p-6 px-14" asChild key={item.name}>
                                    <Link href={item.href}>{item.name}</Link>
                                </Button>
                            ))
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
