import { PageProps as InertiaPageProps } from '@inertiajs/core'

export interface SharedProps {
    auth: {
        user: {
            id: number
            name: string
            email: string
            role: string
        } | null
    }
    flash: {
        status: string | null
        message: string | null
    }
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, SharedProps {}
}