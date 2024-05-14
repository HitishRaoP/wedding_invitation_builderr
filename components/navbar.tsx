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
import { Profile } from "./profile"

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    return (
        <NavigationMenu className={cn("my-4 px-0", className)}>
            <div className="hidden sm:flex justify-between items-center w-full">
                <NavigationMenuList className="flex w-full gap-x-2 justify-between items-center">
                    <NavigationMenuItem>
                        <CompanyLogo />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/pricing" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Dashboard
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Link href="/create" legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-lime-300 hover:bg-lime-400")}>
                                Create
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Profile />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </div>
            <div className="flex items-center justify-between w-full sm:hidden">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Sidebar />
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Link href="/create" legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-lime-300 hover:bg-lime-400")}>
                                Create
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Profile />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </div>
        </NavigationMenu>
    )
}
