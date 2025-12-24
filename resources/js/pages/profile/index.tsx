import { Head } from "@inertiajs/react"
import { usePage } from "@inertiajs/react"

import MainLayout from "@/layouts/main-layout"
import { Card } from "@/components/ui/card"

export default function Index({ page_title }: { page_title: string }) {
    const { auth } = usePage().props

    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="Profile for Contentia app." />
            </Head>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-4">
                    <Card className="p-4 shadow-none">

                    </Card>
                </div>
                <div className="lg:col-span-8">
                    <Card className="p-4 shadow-none">
                        
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}