import { router } from "@inertiajs/react"
import { User } from "@/types/user"
import { update_status, update_password, deleteMethod } from "@/routes/users"

import UserEditForm from "@/features/users/components/users-edit-form"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, 
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { MoreHorizontal } from "lucide-react"

export default function UsersAction(user: User) {
    const handleUpdatePassword = (id: number) => {
        router.get(update_password.url(id))
    }

    const handleUpdateStatus = (id: number) => {
        router.get(update_status.url(id))
    }

    const handleDelete = (id: number) => {
        router.get(deleteMethod.url(id))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 bg-[#f5f5fc] text-[#5955D1] dark:bg-[#02011F]">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                    <UserEditForm {...user} />
                </DropdownMenuItem>

                <DropdownMenuItem  asChild>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start px-2">Reset</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Do want to reset user account password?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Resetting this user’s password will immediately revoke their current credentials. The user will need to use the new password to log in.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleUpdatePassword(user.id)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start px-2">{user.status == "active" ? "Deactivate" : "Activate"}</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Do want to {user.status == "active" ? "deactivate" : "activate"} user account?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Changing the account status will affect the user's ability to access the system. You can update this again at any time.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleUpdateStatus(user.id)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start px-2 text-red-500">Delete</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Do you want to delete this user account?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Deleting this user will permanently remove their account and all associated data. This action cannot be undone.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDelete(user.id)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}