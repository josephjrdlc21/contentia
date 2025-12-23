import { Card } from "@/components/ui/card"
import { ClipboardCheck, StickyNote, MessageSquareText, SquarePen } from "lucide-react"

export default function Total({ totalPosts, totalComments, totalPublished, totalDrafts }: { totalPosts: number, totalComments: number, totalPublished: number, totalDrafts: number }) {
    return (
        <>
            <Card className="px-4 py-6 gap-0 shadow-none">
                <div className="flex items-center gap-5">
                    <div className="
                        rounded-full p-3
                        border border-[#f5f5fc] bg-[#f5f5fc]
                        dark:border-[#2a2f4f] dark:bg-[#1f2340]
                    ">
                        <StickyNote className="
                            size-6 text-[#5955d1]
                            dark:text-[#8b8cf5]
                        "/>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            Total Post
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            {totalPosts}
                        </h2>
                    </div>
                </div>
            </Card>

            <Card className="px-4 py-6 gap-0 shadow-none">
                <div className="flex items-center gap-5">
                    <div className="
                        rounded-full p-3
                        border border-[#fefaf0] bg-[#fefaf0]
                        dark:border-[#4a3b14] dark:bg-[#2f260f]
                    ">
                        <MessageSquareText className="
                            size-6 text-[#f5a70d]
                            dark:text-[#f7c843]
                        "/>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            Total Comments
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            {totalComments}
                        </h2>
                    </div>
                </div>
            </Card>

            <Card className="px-4 py-6 gap-0 shadow-none">
                <div className="flex items-center gap-5">
                    <div className="
                        rounded-full p-3
                        border border-[#fff3f3] bg-[#fff3f3]
                        dark:border-[#4a1f1f] dark:bg-[#2a1414]
                    ">
                        <SquarePen className="
                            size-6 text-[#f83636]
                            dark:text-[#ff6b6b]
                        "/>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            Total Drafts
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            {totalDrafts}
                        </h2>
                    </div>
                </div>
            </Card>

            <Card className="px-4 py-6 gap-0 shadow-none">
                <div className="flex items-center gap-5">
                    <div className="
                        rounded-full p-3
                        border border-[#f0f9f6] bg-[#f0f9f6]
                        dark:border-[#1f3f35] dark:bg-[#102822]
                    ">
                        <ClipboardCheck className="
                            size-6 text-[#009966]
                            dark:text-[#34d399]
                        "/>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            Total Published
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            {totalPublished}
                        </h2>
                    </div>
                </div>
            </Card>
        </>
    )
}