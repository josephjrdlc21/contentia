import { Head } from "@inertiajs/react"
import { Data } from "@/types/audit"

import MainLayout from "@/layouts/main-layout"
import AuditTrailsList from "@/features/audit-trails/components/audit-trails-list"

export default function Index({ page_title, record }: Data) {
    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="List of audit trail for Contentia app." />
            </Head>

            <AuditTrailsList record={record}/>
        </MainLayout>
    )
}