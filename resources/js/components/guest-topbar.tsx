import { login } from "@/routes/auth";

import { ModeToggle } from "@/components/ui/mode"
import { BotMessageSquare } from "lucide-react"

export default function GuestTopbar(){
    return(
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
            <a className="flex items-center gap-2" href="#" data-discover="true">
                <div className="bg-primary rounded-md p-1">
                    <BotMessageSquare className="size-6 text-white" />     
                </div>
                <span className="font-bold text-xl hidden sm:inline-block">Contentia</span>
            </a>
            <nav className="flex items-center gap-2">
                <ModeToggle />
                <a href={login.url()} data-discover="true">
                    <button data-slot="button" className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3">Log in</button>
                </a>
            </nav>
        </div>
    );
}