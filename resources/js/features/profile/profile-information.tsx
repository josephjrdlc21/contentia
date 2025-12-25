import { usePage } from "@inertiajs/react"
import { initialsFormat, titleCase } from "@/lib/strings"
import { readableDate } from "@/lib/dates"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function ProfileInformation() {
    const { auth } = usePage().props

    return (
        <Card className="p-4 shadow-none">
            <div className="flex items-center gap-3">
                <Avatar className="size-15">
                    <AvatarImage src={`${auth.user?.directory}/${auth.user?.filename}`} alt="author" />
                    <AvatarFallback>{initialsFormat(auth.user?.name)}</AvatarFallback>
                </Avatar>
                <div>
                    {auth.user?.name} <br/>
                    <span className="text-sm text-muted-foreground">{titleCase(auth.user?.role)}</span>
                </div>
            </div>

            <Separator />

            <div className="space-y-4 text-sm">
                <div className="font-bold">
                    Basic Information
                </div>
                <div>
                    <span className="text-muted-foreground">Full Name:</span> <br/>
                    <span className="font-semibold">{titleCase(auth.user?.name)}</span>
                </div>
                <div>
                    <span className="text-muted-foreground">Role:</span> <br/>
                    <span className="font-semibold">{titleCase(auth.user?.role)}</span>
                </div>
                <div>
                    <span className="text-muted-foreground">Email:</span> <br/>
                    <span className="font-semibold">{auth.user?.email}</span>
                </div>
                <div>
                    <span className="text-muted-foreground">Date Joined:</span> <br/>
                    <span className="font-semibold">{readableDate(auth.user?.created_at)}</span>
                </div>
            </div>

            <Separator />

            <div className="space-y-2 mb-4">
                <div className="font-semibold">
                    Social Links
                </div>

                <div className="flex flex-wrap gap-2">
                    <Button variant="outline" type="button">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
							d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
							fill="currentColor"
							/>
						</svg>
					</Button>
                    <Button variant="outline" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                            fill="currentColor"
                            d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
                            />
                        </svg>
                    </Button>
                    <Button variant="outline" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                            fill="currentColor"
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318C8.416 2.175 8.796 2.163 12 2.163zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"
                            />
                        </svg>
                    </Button>
                    <Button variant="outline" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                            fill="currentColor"
                            d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.273V1.727C24 .774 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 7.433c-1.13 0-2.05-.93-2.05-2.07 0-1.14.92-2.07 2.05-2.07s2.05.93 2.05 2.07c0 1.14-.92 2.07-2.05 2.07zM20.452 20.452h-3.53v-5.569c0-1.328-.027-3.036-1.85-3.036-1.85 0-2.133 1.445-2.133 2.94v5.665h-3.53V9h3.39v1.561h.047c.472-.895 1.623-1.84 3.34-1.84 3.57 0 4.23 2.35 4.23 5.404v6.327z"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </Card>
    )
}