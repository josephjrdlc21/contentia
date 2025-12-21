import { useForm } from "@inertiajs/react";
import { comment_store } from "@/routes";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoaderCircle } from "lucide-react";

export default function GuestCommentForm(id: { id: number}) {

    const form = useForm(
        {
            name: '',
            content: '',
        }
    )

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        form.post(comment_store.url(id), {
            onSuccess: () => {
                form.reset()
            },
        })
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 mb-10">
            <p className="font-semibold mb-4">Add your comment</p>

            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 max-w-lg">
                <Input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded outline-none"
                    value={form.data.name} 
                    onChange={(e) => form.setData('name', e.target.value)}
                />
                {form.errors.name && <small className="text-red-500">{form.errors.name}</small>}

                <Textarea
                    placeholder="Comment"
                    className="w-full p-2 border border-gray-300 rounded outline-none h-48"
                    value={form.data.content} 
                    onChange={(e) => form.setData('content', e.target.value)}
                ></Textarea>
                {form.errors.content && <small className="text-red-500">{form.errors.content}</small>}

                <button
                    type="submit"
                    disabled={form.processing}
                    className="flex items-center gap-2 bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
                >
                    {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Comment
                </button>
            </form>
        </div>
    )
}