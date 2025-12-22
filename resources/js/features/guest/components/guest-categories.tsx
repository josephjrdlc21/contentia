import { Category } from "@/types/post"
import { titleCase } from "@/lib/strings"
import { home } from "@/routes"
import { router } from "@inertiajs/react"

export default function GuestCategories(categories: Category) {
    const handleFilter = (category: string) => {

        const query = {
            query: {
                category: category === 'All' ? '' : category,
            },
        };

        router.get(home.url(query))
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 my-10 relative">
            {Object.entries(categories).map(([key, value]) => (
                <div key={key} className="relative">
                    <button
                        onClick={() => handleFilter(value)}
                        className="
                            cursor-pointer
                            text-gray-500
                            font-semibold
                            transition-all duration-200
                            hover:text-primary
                            after:content-['']
                            after:absolute
                            after:left-0
                            after:-bottom-1
                            after:h-[2px]
                            after:w-0
                            after:bg-primary
                            after:transition-all
                            after:duration-300
                            hover:after:w-full
                        "
                    >
                        {titleCase(value)}
                    </button>
                </div>
            ))}
        </div>
    )
}