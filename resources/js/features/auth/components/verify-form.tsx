import { useForm } from "@inertiajs/react"
import { cn } from "@/lib/utils"
import { home } from "@/routes"
import { store_verify } from "@/routes/auth"

import { BotMessageSquare, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function VerifyForm({ className, ...props }: React.ComponentProps<"div">) {
	const token = window.location.pathname.split('/').pop()

	const form = useForm(
        {
            code: '',
        }
    ) 

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		form.post(store_verify.url(token))
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
				</div>
				<form onSubmit={handleSubmit} className="grid gap-4">
                    <Field>
						<FieldLabel htmlFor="code">Code</FieldLabel>
						<Input id="code" type="text" placeholder="code" value={form.data.code} onChange={(e) => form.setData('code', e.target.value)}/>
					</Field>
					<Field>
						<Button type="submit" className="cursor-pointer" disabled={form.processing}>
							{form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
							Verify
						</Button>
					</Field>
				</form>
			</FieldGroup>
        </div>
    )
}