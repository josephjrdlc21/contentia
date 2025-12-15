import { Head } from "@inertiajs/react"
import { Data } from "@/types/post"

import MainLayout from "@/layouts/main-layout"
import PostsList from "@/features/posts/components/posts-list"

export default function Index({ page_title, record }: Data) {
    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="List of posts for Contentia app." />
            </Head>

            <PostsList record={record}/>
        </MainLayout>
    )
}