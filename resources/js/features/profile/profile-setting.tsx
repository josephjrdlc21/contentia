import { usePage } from "@inertiajs/react"
import { useForm } from "@inertiajs/react"
import { update } from "@/routes/profile"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoaderCircle } from "lucide-react"

export default function ProfileSetting() {
    const { auth } = usePage().props

    const form = useForm(
        {
            image: null as any,
            name: auth.user?.name ?? '',
            email: auth.user?.email ?? '',
        }
    ) 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    
        form.submit(update(auth.user?.id ?? 0))
    }

    return (
        <Card className="p-4 shadow-none">
            <div className="font-semibold">
                Account Settings
            </div>

            <Separator />

            <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="image">Change Profile</Label>
                        <Input type="file" id="image" name="image" onChange={(e) => form.setData('image', e.target.files?.[0] ?? null)} />
                        {form.errors.image && <small className="text-red-500">{form.errors.image}</small>}
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="name">Full name</Label>
                        <Input type="text" id="name" name="name" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)} />
                        {form.errors.name && <small className="text-red-500">{form.errors.name}</small>}
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" id="email" name="email" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)} />
                        {form.errors.email && <small className="text-red-500">{form.errors.email}</small>}
                    </div> 
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <Button type="submit" className="cursor-pointer" disabled={form.processing}>
                        {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Save Changes
                    </Button>
                </div>
            </form>
        </Card>
    )
}