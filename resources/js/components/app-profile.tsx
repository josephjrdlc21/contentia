import { logout } from "@/routes/auth"
import { index } from "@/routes/profile"
import { initialsFormat, titleCase } from "@/lib/strings"
import { usePage } from "@inertiajs/react"

import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuGroup, 
    DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Lock, LogOut, User2Icon } from "lucide-react"

export default function AppProfile() {
    const { auth } = usePage().props

    return(
        <div className="flex justify-between items-center gap-2 mr-5">
            <div className="text-right inline-block">
                <div className="font-bold text-sm">{auth.user?.name}</div>
                <small className="text-gray-600 text-xs block leading-snug">
                    {titleCase(auth.user?.role)}
                </small>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="#" alt="profile" />
                        <AvatarFallback className="bg-violet-100 dark:text-gray-700">{initialsFormat(auth.user?.name)}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        <span className="font-bold text-sm">{auth.user?.name}</span><br/>
                        <small className="text-gray-600 text-xs block leading-snug">
                            {titleCase(auth.user?.role)}
                        </small>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild className="cursor-pointer">
                           <a href={index.url()}><User2Icon/> Profile </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <a href="#"><Lock/> Change Password</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <a href={logout.url()}><LogOut/> Logout</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}