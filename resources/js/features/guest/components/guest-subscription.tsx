const content = {
    title: "Never Miss a Blog!",
    description: "Subscribe to get the latest blog, new tech, and exclusive news.",
};

export default function GuestSubscription() {
    return (
        <>
            <h1 className="md:text-4xl text-2xl font-semibold">{content.title}</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">{content.description}</p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500" placeholder="Enter your email" type="text"/>
                <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none">Subscribe</button>
            </form>
        </>
    )
}