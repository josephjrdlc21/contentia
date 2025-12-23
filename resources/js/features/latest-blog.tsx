import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { initialsFormat, titleCase } from "@/lib/strings"
import { dateOnly } from "@/lib/dates"
import { Post } from "@/types/welcome"

export default function LatestBlog({ latestPosts }: { latestPosts: Post[] }) {
    const posts = Array.isArray(latestPosts) ? latestPosts : [];

    return (
        <Card className="p-0 gap-0 shadow-none mt-7">
            <div className="px-[20px] py-[16px]">
                <h6 className="font-semibold">Latest Blogs</h6>
            </div>

            <div className="px-4 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="!border-b-0 bg-[#f2f2f699] dark:bg-[#4b5563] hover:bg-[#f2f2f699] dark:bg-[#4b5563]">
                            <TableHead className="min-w-[100px] rounded-l-lg"><b>#</b></TableHead>
                            <TableHead className="min-w-[200px]"><b>Title</b></TableHead>
                            <TableHead className="min-w-[150px]"><b>Author</b></TableHead>
                            <TableHead className="min-w-[150px]"><b>Category</b></TableHead>
                            <TableHead className="min-w-[100px]"><b>Status</b></TableHead>
                            <TableHead className="min-w-[130px] rounded-r-lg"><b>Date</b></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {posts.length === 0 ? (
                            <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={6} className="text-center">No Record Found.</TableCell>
                            </TableRow>
                        ) : (
                            posts.map((post, index) => (
                                <TableRow key={post.id} className="hover:bg-transparent">
                                    <TableCell className="py-5">{index + 1}</TableCell>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={`${post.user?.directory}/${post.user?.filename}`} alt="author" />
                                                <AvatarFallback>{initialsFormat(post.user?.name)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                {post.user?.name}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{titleCase(post.category?.name)}</TableCell>
                                    <TableCell 
                                        className={post.status === "published" ? "text-green-500" : "text-slate-500"}
                                    >
                                        {titleCase(post.status)}
                                    </TableCell>
                                    <TableCell>{dateOnly(post.created_at)}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}