import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { home } from "@/routes";

export default function GuestFilter() {
    const form = useForm(
        { 
            keyword: ''
        }
    )

    const [isFiltered, setIsFiltered] = useState(false)

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault()

        form.transform((data) => ({
            ...data,
            keyword: data.keyword ? data.keyword.toLowerCase() : '',
        }))

        form.get(home.url(), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => setIsFiltered(true),
        })
    }

    const handleReset = () => {
        form.setData('keyword', '')
        
        form.get(home.url(), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => setIsFiltered(false),
        })
    }

    return (
        <form
            onSubmit={isFiltered ? handleReset : handleFilter}
            className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 dark:border-[#4b5563] bg-white dark:bg-[#0f172a] rounded overflow-hidden"
        >
            <input
                value={form.data.keyword}
                onChange={(e) => form.setData('keyword', e.target.value)}
                placeholder="Search for blogs"
                className="w-full pl-4 outline-none"
                type="text"
            />

            <button
                type="submit"
                className={`px-8 py-2 m-1.5 rounded transition-all cursor-pointer text-white
                    ${isFiltered
                        ? 'bg-gray-500 hover:bg-gray-600'
                        : 'bg-primary hover:scale-105'}
                `}
            >
                {isFiltered ? 'Reset' : 'Search'}
            </button>
        </form>
    )
}