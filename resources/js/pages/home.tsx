import { Head } from "@inertiajs/react"
import { Data } from "@/types/post"

import GuestLayout from "@/layouts/guest-layout"
import GuestHero from "@/features/guest/components/guest-hero"
import GuestFilter from "@/features/guest/components/guest-filter"
import GuestCategories from "@/features/guest/components/guest-categories"
import GuestPosts from "@/features/guest/components/guest-posts"
import AppPagination from "@/components/app-pagination";

export default function Home({ page_title, record }: Data) {
    return (
        <GuestLayout>
            <Head title={page_title}>
                <meta name="description" content="Home page for Contentia app." />
            </Head>

            <div className="relative">
                <div className="text-center mt-20 mb-8">
                    <GuestHero />
                    <GuestFilter />
                </div>

                <div>
                    <GuestCategories />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-5">
                    <GuestPosts record={record}/>
                </div>
                <div className="mb-24">
                    <AppPagination links={record?.links ?? []} />
                </div>
            </div>
        </GuestLayout>
    );
}
