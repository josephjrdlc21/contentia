import { Head } from "@inertiajs/react"

import MainLayout from "@/layouts/main-layout"
import ProfileChangePasswordForm from "@/features/profile/profile-change-password-form"

export default function ChangePassword({ page_title }: { page_title: string }) {

    return (
        <MainLayout>
            <Head title={page_title}>
                <meta name="description" content="Change Password for Contentia app." />
            </Head>

            <div className="max-w-xl">
                <ProfileChangePasswordForm />
            </div>
        </MainLayout>
    )
}