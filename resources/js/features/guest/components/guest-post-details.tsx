import { Post } from "@/types/post"
import { blogDate } from "@/lib/dates"

import GuestCommentForm from "@/features/guest/components/guest-comment-form"

export default function GuestPostDetails(post: Post) {
    return (
        <>
            <div className="text-center mt-20 text-gray-600 dark:text-gray-300">
                <p className="text-primary py-4 font-medium">Published on {blogDate(post.created_at)}</p>
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800 dark:text-gray-200">{post.title}</h1>
                <h2 className="my-5 max-w-lg truncate mx-auto">{post.subtitle}</h2>
                <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">{post.user?.name}</p>
            </div>

            <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
                <img alt="" src={`${post.directory}/${post.filename}`} className="rounded-3xl mb-5" />
                
                <div className="rich-text max-w-3xl mx-auto mt-20">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="mt-10 relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600 dark:text-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                            <img
                                alt=""
                                className="w-6"
                                src="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ccircle%20cx='12'%20cy='9'%20r='3'%20stroke='%236b6b6b'%20stroke-width='1.5'%3e%3c/circle%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20stroke='%236b6b6b'%20stroke-width='1.5'%3e%3c/circle%3e%3cpath%20d='M17.9691%2020C17.81%2017.1085%2016.9247%2015%2011.9999%2015C7.07521%2015%206.18991%2017.1085%206.03076%2020'%20stroke='%236b6b6b'%20stroke-width='1.5'%20stroke-linecap='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
                            />
                            <p className="font-medium">Dev Kumar</p>
                        </div>

                        <p className="text-sm max-w-md ml-8">
                            Honestly, I did not expect this to work, but it totally did. Saved my project!
                        </p>

                        <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                            7 months ago
                        </div>
                    </div>

                    <GuestCommentForm id={post.id} />
                </div>  
            </div>
        </>
    )
}