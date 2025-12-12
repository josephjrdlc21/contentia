import { Author } from "@/types/author"
import { readableDate } from "@/lib/dates"
import { initialsFormat, titleCase } from "@/lib/strings"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, 
    DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Eye } from "lucide-react"

export default function AuthorsProfile(author: Author) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" className="h-8 w-8 p-0 mr-2 bg-[#f2f2f4] text-[#29294B] 
                    dark:bg-[#08080f] dark:text-[#b9c2da] cursor-pointer"
                >
                    <Eye />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Author Details</DialogTitle>
                    <DialogDescription>
                        Review the author's personal information and account details.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-5">
                    <div className="flex gap-2 items-center gap-4">
                        <Avatar className="size-15">
                            <AvatarImage src={`${author.directory}/${author.filename}`} alt="author" />
                            <AvatarFallback className="bg-violet-100 dark:text-gray-700">{initialsFormat(author.name)}</AvatarFallback>
                        </Avatar>
                        <div className="inline-block">
                            <div className="font-bold text-lg">{author.name}</div>
                            <small className="text-gray-600 text-md block leading-snug">
                                {titleCase(author.role)}
                            </small>
                        </div>
                    </div>
                    
                    <Separator />

                    <div>
                        <div className="font-semibold text-base mb-4">Basic Information</div>

                        <div className="text-sm">Full Name</div>
                        <div className="text-sm font-semibold mb-3">{author.name}</div>

                        <div className="text-sm">Email</div>
                        <div className="text-sm font-semibold mb-3">{author.email}</div>

                        <div className="text-sm">Status</div>
                        <div className="text-sm font-semibold mb-3">{author.status}</div>

                        <div className="text-sm">Date Joined</div>
                        <div className="text-sm font-semibold mb-3">{readableDate(author.created_at)}</div>
                    </div>
                </div>

                <Separator />

                <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                        </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

