import { Head } from "@inertiajs/react"
import { Data } from "@/types/user"

import MainLayout from "@/layouts/main-layout"
import UsersList from "@/features/users/components/users-list"

export default function Index({ page_title, record }: Data) {
    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="List of users for Contentia app." />
            </Head>

            <UsersList record={record} />
        </MainLayout>
    )
}