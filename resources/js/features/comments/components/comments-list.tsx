import { CommentsListProps } from "@/types/comment"
import { dateOnly } from "@/lib/dates"
import { titleCase, statusBadgeClass } from "@/lib/strings"

import AppPagination from "@/components/app-pagination"
import CommentsAction from "@/features/comments/components/comments-action"
import CommentsFilter from "@/features/comments/components/comments-filter"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CommentsList({ record }: CommentsListProps) {
    const comments = Array.isArray(record.data) ? record.data : record.data ? [record.data] : []

    return(
        <>
            <div className="flex flex-col md:flex-row justify-between gap-3 lg:mb-6">
                <>
                    <div></div>
                    <CommentsFilter />
                </>
            </div>
            <Card className="p-0 gap-0 shadow-none">
                <div className="px-[20px] py-[16px]">
                    <h6 className="font-semibold">Comment List</h6>
                </div>

                <div className="px-4 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="!border-b-0 bg-[#f2f2f699] dark:bg-[#4b5563] hover:bg-[#f2f2f699] dark:bg-[#4b5563]">
                                <TableHead className="min-w-[300px] rounded-l-lg"><b>Blog & Comment</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Status</b></TableHead>
                                <TableHead className="min-w-[150px]"><b>Date</b></TableHead>
                                <TableHead className="min-w-[80px] text-center rounded-r-lg"><b>Action</b></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comments.length === 0 ? (
                                <TableRow className="hover:bg-transparent border-b-0">
                                    <TableCell colSpan={4} className="text-center">No Record Found.</TableCell>
                                </TableRow>
                            ) : (
                                comments.map((comment) => (
                                    <TableRow key={comment.id} className="hover:bg-transparent border-b-0">
                                        <TableCell>
                                            <div className="my-3">
                                                <b>Blog:</b> {comment.post.title}
                                            </div>
                                            <div>
                                                <b>Name:</b>  {titleCase(comment.name)}
                                            </div>
                                            <div className="mb-3">
                                                <b>Comment:</b>  {comment.content}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={statusBadgeClass(comment.status) as any}>{comment.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            {dateOnly(comment.created_at)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <CommentsAction />
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>

                    <AppPagination links={record.links}/>
                </div>
            </Card>
        </>
    )
}