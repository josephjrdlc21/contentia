import AuthLayout from "@/layouts/auth-layout"
import { VerifyForm } from "@/features/auth/components/verify-form"

export default function Register() {
    return (
        <AuthLayout>
            <VerifyForm />
        </AuthLayout>
    )
}