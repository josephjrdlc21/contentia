import { LoginForm } from "@/features/auth/components/login-form"

export default function Login({ data }: any) {
    console.log(data);
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}