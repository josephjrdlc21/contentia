import AuthLayout from "@/layouts/auth-layout"
import { RegisterForm } from "@/features/auth/components/register-form"

export default function Register() {
    return (
        <AuthLayout>
            <RegisterForm/>
        </AuthLayout>
    )
}