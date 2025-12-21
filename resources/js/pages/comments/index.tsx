import { Head } from "@inertiajs/react"
import { Data } from "@/types/comment"

import MainLayout from "@/layouts/main-layout"
import CommentsList from "@/features/comments/components/comments-list"

export default function Index({ page_title, record }: Data) {

    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="List of comments for Contentia app." />
            </Head>

            <CommentsList record={record} />
        </MainLayout>
    )
}