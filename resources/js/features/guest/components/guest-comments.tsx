import { Comment } from "@/types/post"
import { timeAgo } from "@/lib/dates"

export default function GuestComments({ comments }: { comments: Comment[] }) {
    return (
        <div className="w-full">
            {comments.map(comment => (
                <div key={comment.id} className="mt-5 relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600 dark:text-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            alt=""
                            className="w-6"
                            src="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ccircle%20cx='12'%20cy='9'%20r='3'%20stroke='%236b6b6b'%20stroke-width='1.5'%3e%3c/circle%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20stroke='%236b6b6b'%20stroke-width='1.5'%3e%3c/circle%3e%3cpath%20d='M17.9691%2020C17.81%2017.1085%2016.9247%2015%2011.9999%2015C7.07521%2015%206.18991%2017.1085%206.03076%2020'%20stroke='%236b6b6b'%20stroke-width='1.5'%20stroke-linecap='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
                        />
                        <p className="font-medium">{comment.name}</p>
                    </div>

                    <p className="text-sm max-w-md ml-8">
                        {comment.content}
                    </p>

                    <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                        {timeAgo(comment.created_at)}
                    </div>
                </div>
            ))}
        </div>
    )
}