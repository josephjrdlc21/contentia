import { ReactNode } from "react"
import GuestTopbar from "@/components//guest-topbar"
import GuestFooter from "@/components/guest-footer"
import AppNotification from "@/components/app-notification";

export default function GuestLayout({ children }: { children: ReactNode }){
    return(
        <div className="min-h-screen px-4">
            <div className="max-w-screen-2xl mx-auto">
                <header className="w-full">
                    <GuestTopbar />
                </header>
                {children}
                <AppNotification />
                <GuestFooter />
            </div>
        </div>
    );
}