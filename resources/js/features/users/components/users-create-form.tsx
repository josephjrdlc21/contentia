import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, 
    DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export default function UserCreateForm() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className="w-full">
                        <Plus className="size-4"/> Add User
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add User</DialogTitle>
                        <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                        </DialogDescription>
                </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input type="text" id="email" name="email" defaultValue="peduarte@gmail.com" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" defaultValue="@peduarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="role">Role</Label>
                            <Input type="text" id="role" name="role" defaultValue="super admin" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                            </DialogClose>
                        <Button type="submit">Add User</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
