export interface Comment {
    id: number;
    name: string;
    content: string;
    post_id: number;
    status: string;

    created_at: string;
    updated_at: string;
    deleted_at: string | null;

    post: Post;
}

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
}

export interface Link {
    url: string | null;
    label: string | null;
    page: number | null;
    active: boolean;
}

export interface PaginationRecord {
    current_page: number;
    data: Comment;
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
    record: PaginationRecord;
}

export interface CommentsListProps {
    record: PaginationRecord;
}