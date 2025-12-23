import { Head } from "@inertiajs/react"
import { WelcomeProps } from "@/types/welcome"

import MainLayout from "@/layouts/main-layout"
import Total from "@/features/total"
import LatestBlog from "@/features/latest-blog"

export default function Welcome({ page_title, record }: WelcomeProps) {

    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="Dashboard page for Contentia app." />
            </Head>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Total totalPosts={record.total_posts}
                    totalComments={record.total_comments}
                    totalPublished={record.total_published}
                    totalDrafts={record.total_drafts}
                />
            </div>

            <LatestBlog latestPosts={record.latest_posts} />
        </MainLayout>
    );
}
