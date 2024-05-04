import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CompanyLogo() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
