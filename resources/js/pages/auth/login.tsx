import { LoginForm } from "@/features/auth/components/login-form"
import AuthLayout from "@/layouts/auth-layout"

export default function Login() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    )
}