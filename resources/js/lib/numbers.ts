export function quantityFormat(value: number | string): string {
    if (value === null || value === undefined) return "";

    const num = typeof value === "string" ? parseInt(value, 10) : value;
    
    if (isNaN(num)) return "";

    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
    }).format(num);
}

export function priceFormat(value: number | string): string {
    if (value === null || value === undefined) return "";

    const num = typeof value === "string" ? parseFloat(value) : value;
    
    if (isNaN(num)) return "";

    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);
}