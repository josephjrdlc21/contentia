import { Category } from "@/types/post"
import { titleCase } from "@/lib/strings"

export default function GuestCategories(categories: Category) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 my-10 relative">
            {Object.entries(categories).map(([key, value]) => (
                <div key={key} className="relative">
                    <button className="cursor-pointer text-gray-500 false">{titleCase(value)}</button>
                </div>
            ))}
        </div> 
    )
}