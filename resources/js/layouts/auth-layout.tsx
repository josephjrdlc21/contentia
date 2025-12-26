import { ThemeProvider } from "@/components/app-theme-provider"
import AppNotification from "@/components/app-notification"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return(
        <ThemeProvider>
            <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="w-full max-w-sm">
                    {children}
                    <AppNotification/>
                </div>
            </div>
        </ThemeProvider>
    )
}