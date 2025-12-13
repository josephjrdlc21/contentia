import { Category } from "@/types/category"
import { router } from "@inertiajs/react"
import { deleteMethod } from "@/routes/categories"

import CategoriesEditForm from "@/features/categories/components/categories-edit-form"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { MoreHorizontal } from "lucide-react"

export default function CategoriesAction(category: Category) {
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
                    <CategoriesEditForm {...category} />
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start px-2 text-red-500">Delete</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Delete this category?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action can only be performed if there are no blogs assigned to this category.
                                    Once deleted, the category cannot be recovered.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDelete(category.id)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}