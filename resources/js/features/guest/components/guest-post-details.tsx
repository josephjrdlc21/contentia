import { Post } from "@/types/post"
import { blogDate } from "@/lib/dates"

import GuestCommentForm from "@/features/guest/components/guest-comment-form"
import GuestComments from "@/features/guest/components/guest-comments";

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

                    <GuestComments comments={post.comments || []} />

                    <GuestCommentForm id={post.id} />
                </div>  
            </div>
        </>
    )
}