import * as React from "react"
import { usePage } from "@inertiajs/react"
import { cn } from "@/lib/utils"

import { 
	BotMessageSquare,
	LayoutDashboard,
	StickyNote,
	ChartBarStacked,
	MessageSquareText,
	Logs,
	SquareUser,
	Users,
} from "lucide-react"

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { index as dashboard } from "@/routes"
import { index as user } from "@/routes/users"

// This is sample data.
const data = {
	navMain: [
		{
			title: "Navigation",
			url: "#",
			roles: ['super_admin', 'author'],
			items: [
				{
					title: "Dashboard",
					url: dashboard.url(),
					isActive: location.pathname === dashboard.url(),
					icon: <LayoutDashboard className="size-4" />,
					types: ['super_admin', 'author'],
				},
				{
					title: "Posts",
					url: "#",
					icon: <StickyNote className="size-4" />,
					isActive: location.pathname === "",
					types: ['super_admin', 'author'],
				},
				{
					title: "Categories",
					url: "#",
					icon: <ChartBarStacked className="size-4" />,
					isActive: location.pathname === "",
					types: ['super_admin', 'author'],
				},
				{
					title: "Comments",
					url: "#",
					icon: <MessageSquareText className="size-4" />,
					isActive: location.pathname === "",
					types: ['super_admin', 'author'],
				},
				{
					title: "Activity Logs",
					url: "#",
					icon: <Logs className="size-4" />,
					isActive: location.pathname === "",
					types: ['super_admin'],
				},
			],
		},
		{
			title: "User Management",
			url: "#",
			roles: ['super_admin'],
			items: [
				{
					title: "Authors",
					url: "#",
					icon: <SquareUser className="size-4" />,
					isActive: location.pathname === "",
					types: ['super_admin'],
				},
				{
					title: "Accounts",
					url: user.url(),
					icon: <Users className="size-4" />,
					isActive: location.pathname === user.url(),
					types: ['super_admin'],
				},
			],
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { auth } = usePage().props

	return (		
		<Sidebar variant="floating" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="bg-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded">
									<BotMessageSquare className="size-5" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-medium text-lg">Contentia</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className="gap-2">
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title} className={item.roles.includes(auth.user?.role ?? "") ? "block" : "hidden"}>
								<SidebarMenuButton asChild>
									<a href={item.url} className="font-semibold">
										{item.title}
									</a>
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub className="ml-0 border-l-0 px-1.5">
										{item.items.map((item) => (
											<SidebarMenuSubItem key={item.title} 
												className={cn('py-0.5', item.types.includes(auth.user?.role ?? "") ? "block" : "hidden")}
											>
												<SidebarMenuSubButton asChild isActive={item.isActive}>
													<a href={item.url} className="flex items-center gap-4">
														{item.icon}
														<span>{item.title}</span>
													</a>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
