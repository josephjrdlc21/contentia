import { PostsListProps } from "@/types/post"
import { show } from "@/routes";
import { router } from "@inertiajs/react";

export default function GuestPosts({ record }: PostsListProps) {
    const posts = Array.isArray(record?.data) ? record.data : record?.data ? [record.data] : [];

    const handlePostClick = (id: number) => {
        router.get(show.url(id));
    }

    return (
       <>
            {posts.length === 0 ? (
                <div className="text-center py-10"></div>
            ) : (
                posts.map((post) => (
                    <div onClick={() => handlePostClick(post.id)} key={post.id} className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer">
                        <img alt="" className="aspect-video" src={`${post.directory}/${post.filename}`}/>
                        <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">{post.category.name}</span>
                        <div className="p-5">
                            <h5 className="mb-2 font-medium text-gray-900 dark:text-gray-200">{post.title}</h5>
                            <h6 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-400">
                                {post.subtitle}
                            </h6>
                        </div>
                    </div>
                ))
            )}
       </>
    )
}