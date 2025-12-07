import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, RefreshCw } from "lucide-react"

export default function UsersFilter() {
    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("search done");
    }

    return (
        <form onSubmit={handleFilter} className="mb-6 lg:mb-0">
            <div className="flex flex-row gap-2">
                <div className="w-full lg:w-[250px]">
                    <Input name="keyword" placeholder="Search" value=""/>
                </div>
                <Button type="submit" variant="secondary" className="cursor-pointer">
                    <Search className="size-4"/>
                </Button>
                <Button variant="secondary" asChild>
                    <a href="#">
                        <RefreshCw className="size-4"/>
                    </a>
                </Button>
            </div>
        </form>
    )
}