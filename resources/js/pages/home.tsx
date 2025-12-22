import { Head } from "@inertiajs/react"
import { Data } from "@/types/post"
import { motion } from "framer-motion"

import GuestLayout from "@/layouts/guest-layout"
import GuestHero from "@/features/guest/components/guest-hero"
import GuestFilter from "@/features/guest/components/guest-filter"
import GuestCategories from "@/features/guest/components/guest-categories"
import GuestPosts from "@/features/guest/components/guest-posts"
import GuestSubscription from "@/features/guest/components/guest-subscription"
import AppPagination from "@/components/app-pagination";

export default function Home({ page_title, categories, record }: Data) {
    
    return (
        <GuestLayout>
            <Head title={page_title}>
                <meta name="description" content="Home page for Contentia app." />
            </Head>

            <div className="relative">
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-20 mb-8 relative"
                >
                        <div
                            className="
                                absolute inset-0
                                -z-10
                                pointer-events-none
                                bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
                                dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]
                                [background-size:16px_16px]
                                [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
                            "
                        ></div>                    
                    <GuestHero />
                    <GuestFilter />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                >
                    <GuestCategories {...categories} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                >
                    <div 
                
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-5"
                    >
                        <GuestPosts record={record}/>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                >
                    <div className="mb-24">
                        <AppPagination links={record?.links ?? []} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                >
                    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
                        <GuestSubscription />
                    </div>
                </motion.div>
            </div>
        </GuestLayout>
    );
}
