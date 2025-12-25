import { PageProps as InertiaPageProps } from '@inertiajs/core'

export interface SharedProps {
    auth: {
        user: {
            id: number
            name: string
            email: string
            role: string
            source: string | null
            path: string | null
            directory: string | null
            filename: string | null
            last_login_at: string | null
            created_at: string
            updated_at: string
            deleted_at: string | null
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