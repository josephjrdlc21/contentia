import { UsersListProps } from "@/types/user"
import { dateOnly, timeAgo } from "@/lib/dates"
import { initialsFormat, statusBadgeClass } from "@/lib/strings"

import AppPagination from "@/components/app-pagination"
import UsersAction from "@/features/users/components/users-action"
import UsersFilter from "@/features/users/components/users-filter"
import UsersCreateForm from "@/features/users/components/users-create-form"
import UsersProfile from "@/features/users/components/users-profile"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function UsersList({ record }: UsersListProps) {
    const users = Array.isArray(record.data) ? record.data : record.data ? [record.data] : []

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-3 lg:mb-6">
                <>
                    <UsersCreateForm />
                    <UsersFilter/>
                </>
            </div>

            <Card className="p-0 gap-0 shadow-none">
                <div className="px-[20px] py-[16px]">
                    <h6 className="font-semibold">User List</h6>
                </div>

                <div className="px-4 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="!border-b-0 bg-[#f2f2f699] dark:bg-[#4b5563] hover:bg-[#f2f2f699] dark:bg-[#4b5563]">
                                <TableHead className="min-w-[200px] rounded-l-lg"><b>Name & Profile</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Email</b></TableHead>
                                <TableHead className="min-w-[100px]"><b>Status</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Last Login</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Date</b></TableHead>
                                <TableHead className="min-w-[80px] text-center rounded-r-lg"><b>Action</b></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.length === 0 ? (
                                <TableRow className="hover:bg-transparent">
                                    <TableCell colSpan={6} className="text-center">No Record Found.</TableCell>
                                </TableRow>
                            ) : (
                                users.map((user) => (
                                    <TableRow key={user.id} className="hover:bg-transparent">
                                        <TableCell>
                                            <div className="flex gap-2 items-center">
                                                <Avatar>
                                                    <AvatarImage src={`${user.directory}/${user.filename}`} alt="user" />
                                                    <AvatarFallback className="bg-violet-100 dark:text-gray-700">{initialsFormat(user.name)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <span>{user.name}</span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {user.email}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={statusBadgeClass(user.status) as any}>{user.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            {timeAgo(user.last_login_at)}
                                        </TableCell>
                                        <TableCell>
                                            {dateOnly(user.created_at)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Button asChild>
                                                <UsersProfile {...user} />
                                            </Button>
                                            <UsersAction {...user} />
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