
export default function GuestCategories() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 my-10 relative">
            <div className="relative">
                <button className="cursor-pointer text-gray-500 text-white px-4 pt-0.5">All
                    <div className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"></div>
                </button>
            </div>

            <div className="relative">
                <button className="cursor-pointer text-gray-500 false">Technology</button></div>
                <div className="relative"><button className="cursor-pointer text-gray-500 false">Startup</button>
            </div>
                
            <div className="relative">
                <button className="cursor-pointer text-gray-500 false">Lifestyle</button>
            </div>

            <div className="relative">
                <button className="cursor-pointer text-gray-500 false">Finance</button>
            </div>
        </div> 
    )
}