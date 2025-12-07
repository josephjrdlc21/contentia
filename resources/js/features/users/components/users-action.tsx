import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, 
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export default function UsersAction() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 bg-[#f5f5fc] text-[#5955D1] dark:bg-[#02011F]">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem  asChild>
                    <a href="#">View</a>
                </DropdownMenuItem>
                <DropdownMenuItem  asChild>
                    <a href="#">Edit</a>
                </DropdownMenuItem>
                <DropdownMenuItem  asChild>
                    <a href="#">Deactivate</a>
                </DropdownMenuItem>
                <DropdownMenuItem  asChild>
                    <a href="#">Reset</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem  asChild>
                    <a href="#">Delete</a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}