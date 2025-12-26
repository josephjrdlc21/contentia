import { useForm } from "@inertiajs/react"
import { cn } from "@/lib/utils"
import { home } from "@/routes"
import { login, store } from "@/routes/auth"

import { BotMessageSquare, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
	const form = useForm(
        {
            name: '',
			email: '',
			password: '',
			password_confirmation: '',
        }
    ) 

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		form.submit(store())
	}

    return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
				<div className="flex flex-col items-center gap-2 text-center">
					<a href={home.url()} className="flex flex-col items-center gap-2 font-medium">
						<div className="bg-primary text-white flex size-8 items-center justify-center rounded">
							<BotMessageSquare className="size-6" />
						</div>
						<span className="sr-only">Contentia</span>
					</a>
					<h1 className="text-xl font-bold">Welcome to Contentia</h1>
					<FieldDescription>
						Already have an account? <a href={login.url()}>Sign In</a>
					</FieldDescription>
				</div>
				<form onSubmit={handleSubmit} className="grid gap-4">
                    <Field>
						<FieldLabel htmlFor="name">Full Name</FieldLabel>
						<Input id="name" type="text" placeholder="John Doe" value={form.data.name} onChange={(e) => form.setData('name', e.target.value)}/>
						{form.errors.name && <small className="text-red-500">{form.errors.name}</small>}
					</Field>
					<Field>
						<FieldLabel htmlFor="email">Email</FieldLabel>
						<Input id="email" type="email" placeholder="m@example.com" value={form.data.email} onChange={(e) => form.setData('email', e.target.value)}/>
						{form.errors.email && <small className="text-red-500">{form.errors.email}</small>}
					</Field>
					<Field>
						<FieldLabel htmlFor="password">Password</FieldLabel>
						<Input id="password" type="password" placeholder="**********" value={form.data.password} onChange={(e) => form.setData('password', e.target.value)}/>
						{form.errors.password && <small className="text-red-500">{form.errors.password}</small>}
					</Field>
                    <Field>
						<FieldLabel htmlFor="confirm_password">Confirm Password</FieldLabel>
						<Input id="confirm_password" type="password" placeholder="**********" value={form.data.password_confirmation} onChange={(e) => form.setData('password_confirmation', e.target.value)}/>
					</Field>
					<Field>
						<Button type="submit" className="cursor-pointer" disabled={form.processing}>
							{form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
							Register
						</Button>
					</Field>
				</form>
			</FieldGroup>
			<FieldDescription className="px-6 text-center">
				By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "} and <a href="#">Privacy Policy</a>.
			</FieldDescription>
        </div>
    )
}