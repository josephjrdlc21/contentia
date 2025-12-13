import { Head } from "@inertiajs/react"
import { Data } from "@/types/category"

import MainLayout from "@/layouts/main-layout"
import CategoriesList from "@/features/categories/components/categories-list"

export default function Index({ page_title, record }: Data) {
    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="List of category for Contentia app." />
            </Head>

            <CategoriesList record={record}/>
        </MainLayout>
    )
}