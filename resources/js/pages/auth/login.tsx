import { LoginForm } from "@/features/auth/components/login-form"
import AppNotification from "@/components/app-notification"
import AuthLayout from "@/layouts/auth-layout"

export default function Login() {
    return (
        <AuthLayout>
            <AppNotification/>
            <LoginForm />
        </AuthLayout>
    )
}