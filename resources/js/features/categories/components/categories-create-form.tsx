import { useEffect } from "react"
import { useForm } from "@inertiajs/react"
import { store } from "@/routes/categories"
import useToggle from "@/hooks/use-toggle"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, 
    DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, LoaderCircle } from "lucide-react"

export default function CategoriesCreateForm() {
    const { value, open, close, setValue } = useToggle(false);

    const form = useForm(
        {
            name: '',
        }
    ) 

    useEffect(() => {
        if(!value) {
            form.clearErrors()
        }
    
    }, [value]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        form.post(store.url(), {
            onSuccess: () => {
                form.reset()
                close()
            },
        })
    }

    return (
        <Dialog open={value} onOpenChange={setValue}>
            <DialogTrigger asChild>
                <Button className="text-white cursor-pointer" onClick={open}>
                    <Plus className="size-4"/> Add Category
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit} className="grid gap-5">
                    <DialogHeader>
                        <DialogTitle>Add Category</DialogTitle>
                        <DialogDescription>
                            Fill in the details to add a new category.
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
                            Submit
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}