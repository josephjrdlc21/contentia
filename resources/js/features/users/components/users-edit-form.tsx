import { useForm } from "@inertiajs/react"
import { useState } from "react"
import { User } from "@/types/user"
import { update } from "@/routes/users"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, 
    DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"

export default function UserEditForm(user: User) {
    const [open, setOpen] = useState(false)

    const form = useForm(
        {
            name: user.name ?? '',
            email: user.email ?? '',
        }
    ) 

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        form.post(update.url(user.id), {
            onSuccess: () => {
                form.reset()
                setOpen(false)
            },
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full justify-start px-2" variant="ghost" onClick={() => setOpen(true)}>
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handelSubmit} className="grid gap-5">
                    <DialogHeader>
                        <DialogTitle>Edit User</DialogTitle>
                        <DialogDescription>
                            Modify the user details as needed and save your changes.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" placeholder="John Doe" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} />
                            {form.errors.name && <small className="text-red-500">{form.errors.name}</small>}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input type="text" id="email" name="email" placeholder="johndoe@example.com" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} />
                            {form.errors.email && <small className="text-red-500">{form.errors.email}</small>}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline" onClick={() => setOpen(true)}>Cancel</Button>
                            </DialogClose>
                        <Button type="submit" disabled={form.processing}>
                            {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
