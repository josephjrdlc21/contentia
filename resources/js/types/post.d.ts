export interface Post {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    user_id: number;
    category_id: number;
    status: string;

    source: string | null;
    path: string | null;
    directory: string | null;
    filename: string | null;

    created_at: string;
    updated_at: string;
    deleted_at: string | null;

    category: Category;
    user: User;
}

export interface Category {
    id: number;
    name: string;
}

export interface User {
    id: number;
    name: string;
}

export interface Link {
    url: string | null;
    label: string | null;
    page: number | null;
    active: boolean;
}

export interface PaginationRecord {
    current_page: number;
    data: Post;
    first_page_url: string | null;
    from: number | null;
    last_page: number | null;
    last_page_url: string | null;
    links: Link[];
    next_page_url: string | null;
    path: string | null;
    per_page: number | null;
    prev_page_url: string | null;
    to: number | string;
    total: number | string;
}

export interface Data {
    page_title: string;
    categories: Category;
    record: PaginationRecord;
}

export interface Blog {
    page_title: string;
    post: Post;
}

export interface PostsListProps {
    categories?: Category;
    record?: PaginationRecord;
}