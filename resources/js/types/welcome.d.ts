export interface User {
    id: number
    name: string

    source: string | null;
    path: string | null;
    directory: string | null;
    filename: string | null;
}

export interface Category {
    id: number
    name: string
}

export interface Post {
    id: number
    title: string
    slug?: string
    status: string
    created_at: string
    user?: User
    category?: Category
}

export interface WelcomeRecord {
    latest_posts: Post[]
    total_posts: number
    total_comments: number
    total_published: number
    total_drafts: number
}

export interface WelcomeProps {
    page_title: string
    record: WelcomeRecord
}