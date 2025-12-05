import { Head } from "@inertiajs/react"

import MainLayout from "@/layouts/main-layout"

export default function Welcome() {
    return (
        <MainLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <h1>Hello Worlds</h1>
        </MainLayout>
    );
}
