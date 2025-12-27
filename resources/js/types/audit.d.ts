export interface Audit {
    id: number;
    ip: string;
    user_id: number;
    process: string;
    remarks: string;
    type: string;

    created_at: string;
    updated_at: string;
    deleted_at: string | null;

    user: User;
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
    record: PaginationRecord;
}

export interface AuditListProps {
    record: PaginationRecord;
}