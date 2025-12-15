import { PostsListProps } from "@/types/post"
import { dateOnly } from "@/lib/dates"
import { titleCase, formatId } from "@/lib/strings"
import { create } from "@/routes/posts"

import AppPagination from "@/components/app-pagination"
import PostsFilter from "@/features/posts/components/posts-filter"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PostsList({ record }: PostsListProps) {
    const posts = Array.isArray(record.data) ? record.data : record.data ? [record.data] : []

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-3 lg:mb-6">
                <>
                    <Button className="text-white cursor-pointer" asChild>
                        <a href={create.url()}>
                            <Plus className="size-4"/> Add Blog
                        </a>
                    </Button>
                    <PostsFilter/>
                </>
            </div>

            <Card className="p-0 gap-0 shadow-none">
                <div className="px-[20px] py-[16px]">
                    <h6 className="font-semibold">Post List</h6>
                </div>

                <div className="px-4 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="!border-b-0 bg-[#f2f2f699] dark:bg-[#4b5563] hover:bg-[#f2f2f699] dark:bg-[#4b5563]">
                                <TableHead className="min-w-[200px] text-center rounded-l-lg"><b>ID</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Title</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Category</b></TableHead>
                                <TableHead className="min-w-[150px]"><b>Status</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Date</b></TableHead>
                                <TableHead className="min-w-[80px] text-center rounded-r-lg"><b>Action</b></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.length === 0 ? (
                                <TableRow className="hover:bg-transparent">
                                    <TableCell colSpan={6} className="text-center">No Record Found.</TableCell>
                                </TableRow>
                            ) : (
                                posts.map((post) => (
                                    <TableRow key={post.id} className="hover:bg-transparent">
                                        <TableCell className="text-center text-primary">
                                            {formatId(post.id)}
                                        </TableCell>
                                        <TableCell>
                                            {titleCase(post.title)}
                                        </TableCell>
                                        <TableCell>
                                            {titleCase(post.category.name)}
                                        </TableCell>
                                        <TableCell 
                                            className={post.status === "published" ? "text-green-500" : "text-slate-500"}
                                        >
                                            {titleCase(post.status)}
                                        </TableCell>
                                        <TableCell>
                                            {dateOnly(post.created_at)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                           
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>

                    <Separator/>

                    <AppPagination links={record.links}/>
                </div>
            </Card>
        </>
    )
}