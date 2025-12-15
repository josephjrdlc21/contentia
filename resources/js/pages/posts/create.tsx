import { Head } from "@inertiajs/react"
import { Data } from "@/types/post"

import MainLayout from "@/layouts/main-layout"
import PostsCreateForm from "@/features/posts/components/posts-create-form"

export default function Index({ page_title, categories }: Data) {

    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="List of posts for Contentia app." />
            </Head>

            <div className="w-full max-w-3xl mx-auto">
                <PostsCreateForm categories={categories}/>
            </div>
        </MainLayout>
    )
}