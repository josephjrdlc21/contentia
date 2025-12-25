import { Head } from "@inertiajs/react"

import MainLayout from "@/layouts/main-layout"
import ProfileInformation from "@/features/profile/profile-information"
import ProfileSetting from "@/features/profile/profile-setting"

export default function Index({ page_title }: { page_title: string }) {

    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="Profile for Contentia app." />
            </Head>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-4">
                    <ProfileInformation />
                </div>
                <div className="lg:col-span-8">
                    <ProfileSetting />
                </div>
            </div>
        </MainLayout>
    )
}