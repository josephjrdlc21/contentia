import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider, SidebarTrigger, } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppSearch } from "@/components/app-search"
import { ModeToggle } from "@/components/ui/mode"
import AppFooter from "@/components/app-footer"
import AppProfile from "@/components/app-profile"
import AppNotification from "@/components/app-notification"
import AppLeads from "@/components/app-leads"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return(
        <SidebarProvider
            style={
                {
                "--sidebar-width": "19rem",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 justify-between items-center">
                    <div className="flex px-4 items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                        <AppSearch />
                        <AppLeads />
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <ModeToggle />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <AppProfile/>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-slate-400" href="#">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-slate-400" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-slate-400">Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                        {children}
                        <AppNotification />
                    </div>  
                    <AppFooter />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}