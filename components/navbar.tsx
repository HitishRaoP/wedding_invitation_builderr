"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CompanyLogo } from "./company-logo"
import { Sidebar } from "./sidebar"

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    return (
        <NavigationMenu className={cn("my-8 w-screen", className)}>
            <NavigationMenuList className="flex justify-between items-center">
                <div className="gap-x-4 hidden sm:flex">
                    <NavigationMenuItem className="">
                        <Link href="/">
                            <CompanyLogo />
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="">
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="">
                        <Link href="/pricing" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="">
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Dashboard
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </div>
                <div className="flex items-center w-full sm:hidden">
                    <NavigationMenuItem>
                        <Sidebar />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                        <Link href="/create" legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-lime-300 hover:bg-lime-400")}>
                                Create
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
