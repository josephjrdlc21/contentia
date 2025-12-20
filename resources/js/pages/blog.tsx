import { Head } from "@inertiajs/react"
import { Blog as Post } from "@/types/post"

import backgroundImage from "@/assets/images/background.png"
import GuestLayout from "@/layouts/guest-layout"
import GuestPostDetails from "@/features/guest/components/guest-post-details"

export default function Blog({ page_title, post }: Post) {

    return (
        <GuestLayout>
            <Head title={page_title}>
                <meta name="description" content="Home page for Contentia app." />
            </Head>

            <div className="relative">
                <img alt="" className="absolute -top-50 -z-1 opacity-50" src={backgroundImage}/>
                <GuestPostDetails {...post} />
            </div>
        </GuestLayout>
    );
}
