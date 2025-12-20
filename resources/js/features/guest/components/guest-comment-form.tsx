import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function GuestCommentForm() {
    return (
        <div className="max-w-3xl mx-auto mt-10 mb-10">
            <p className="font-semibold mb-4">Add your comment</p>

            <form className="flex flex-col items-start gap-4 max-w-lg">
                <Input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full p-2 border border-gray-300 rounded outline-none"
                    value=""
                />

                <Textarea
                    placeholder="Comment"
                    required
                    className="w-full p-2 border border-gray-300 rounded outline-none h-48"
                ></Textarea>

                <button
                    type="submit"
                    className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}