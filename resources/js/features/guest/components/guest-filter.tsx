
export default function GuestFilter() {
    return (
        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 dark:border-[#4b5563] bg-white dark:bg-[#0f172a] rounded overflow-hidden">
            <input placeholder="Search for blogs" className="w-full pl-4 outline-none" type="text"/>
            <button type="submit" className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer">Search</button>
        </form>
    )
}