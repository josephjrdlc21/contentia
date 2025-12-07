export function dateTime(input: string): string {
    if (!input) return "";

    const date = new Date(input);

    return new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Singapore",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    }).format(date);
}

export function dateOnly(isoString: string): string {
    const date = new Date(isoString);
    
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
}

export function dateInput(dateString: string | null | undefined): string {
  if (!dateString) return ''

    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
        console.warn(`Invalid date string: ${dateString}`)
        return ''
    }

    return date.toISOString().split('T')[0]
}

export function dateTimeInput(dateString: string | null | undefined): string {
    if (!dateString) return ''

    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
        console.warn(`Invalid date string: ${dateString}`)
        return ''
    }

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:${minutes}`
}

export function timeAgo(dateString: string | null): string {
    if (!dateString) return ''
    
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: { label: string; seconds: number }[] = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}