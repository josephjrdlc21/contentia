import { useForm } from "@inertiajs/react"
import { index } from "@/routes/categories"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, RefreshCw } from "lucide-react"

export default function CategoriesFilter() {
    const form = useForm(
        { 
            keyword: ''
        }
    )

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();

        form.transform((data) => ({
            ...data,
            keyword: data.keyword ? data.keyword.toLowerCase() : '',
        }))

        form.get(index.url())
    }

    return (
        <form onSubmit={handleFilter} className="mb-6 lg:mb-0">
            <div className="flex flex-row gap-2">
                <div className="w-full lg:w-[250px]">
                    <Input name="keyword" placeholder="Search" value={form.data.keyword} onChange={(e) => form.setData('keyword', e.target.value)} />
                </div>
                <Button type="submit" variant="secondary" className="cursor-pointer">
                    <Search className="size-4"/>
                </Button>
                <Button variant="secondary" asChild>
                    <a href={index.url()}>
                        <RefreshCw className="size-4"/>
                    </a>
                </Button>
            </div>
        </form>
    )
}