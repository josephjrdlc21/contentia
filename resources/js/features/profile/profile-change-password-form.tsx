import { usePage, useForm } from "@inertiajs/react"
import { update_password } from "@/routes/profile"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoaderCircle } from "lucide-react"

export default function ProfileChangePasswordForm() {
    const { auth } = usePage().props

    const form = useForm(
        {
            current_password: '',
            password: '',
            password_confirmation: '',
        }
    ) 

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        form.submit(update_password(auth.user?.id ?? 0))
    };

    return (
        <Card className="p-4 shadow-none">
            <div className="font-semibold">
                Change Password
            </div>

            <form onSubmit={handelSubmit} className="grid gap-5">
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="current_password">Current Password</Label>
                        <Input type="password" id="current_password" name="current_password" placeholder="************" value={form.data.current_password} onChange={(e) => form.setData('current_password', e.target.value)} />
                        {form.errors.current_password && <small className="text-red-500">{form.errors.current_password}</small>}
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="new_password">New Password</Label>
                        <Input type="password" id="new_password" name="new_password" placeholder="************" value={form.data.password} onChange={(e) => form.setData('password', e.target.value)}/>
                        {form.errors.password && <small className="text-red-500">{form.errors.password}</small>}
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="confirm_password">Confirm Password</Label>
                        <Input type="password" id="confirm_password" name="confirm_password" placeholder="************" value={form.data.password_confirmation} onChange={(e) => form.setData('password_confirmation', e.target.value)} />
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