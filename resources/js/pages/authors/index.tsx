import { Head } from "@inertiajs/react"
import { Data } from "@/types/author"

import MainLayout from "@/layouts/main-layout"
import AuthorsList from "@/features/authors/components/authors-list"

export default function Index({ page_title, record }: Data) {
    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="List of authors for Contentia app." />
            </Head>

            <AuthorsList record={record}/>
        </MainLayout>
    )
}