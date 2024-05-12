import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CompanyLogo() {
    return (
        <Avatar>
            <AvatarImage src="/logo.svg" />
            <AvatarFallback>U</AvatarFallback>
        </Avatar>
    )
}
