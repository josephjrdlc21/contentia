import { useEffect } from "react"
import { useForm } from "@inertiajs/react"
import { update } from "@/routes/categories"
import { Category } from "@/types/category"
import useToggle from "@/hooks/use-toggle"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, 
    DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, LoaderCircle } from "lucide-react"

export default function CategoriesEditForm(category: Category) {
    const { value, open, close, setValue } = useToggle(false);

    const form = useForm(
        {
            name: category.name ?? '',
        }
    ) 

    useEffect(() => {
        if(!value) {
            form.clearErrors()
        }
    
    }, [value]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        form.post(update.url(category.id), {
            onSuccess: () => {
                form.reset()
                close()
            },
        })
    }

    return (
        <Dialog open={value} onOpenChange={setValue}>
            <DialogTrigger asChild>
                <Button className="w-full justify-start px-2" variant="ghost" onClick={open}>
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit} className="grid gap-5">
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                        <DialogDescription>
                            Modify the category details as needed and save your changes.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" placeholder="Technology" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} />
                            {form.errors.name && <small className="text-red-500">{form.errors.name}</small>}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline" onClick={close}>Cancel</Button>
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