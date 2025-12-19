import backgroundImage from "@/assets/images/background.png"

const captions = {
    badge: "Ideas Worth Sharing",
    title: {
        before: "Your own",
        highlight: "blogging",
        after: "platform."
    },
    description:
        "This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here."
};

export default function GuestHero() {
    return (
        <>
            <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
                <p>{captions.badge}</p>
            </div>

            <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 dark:text-gray-200">
                {captions.title.before} <span className="text-primary">{captions.title.highlight}</span> <br/> {captions.title.after}
            </h1>

            <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500 dark:text-gray-300">
                {captions.description}
            </p>

            <div className="text-center"></div>

            <img alt="" className="absolute -top-50 -z-1 opacity-50" src={backgroundImage}/>
        </>
    )
}