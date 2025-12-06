import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, 
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function UsersList() {
    return (
        <>
            <Button className="mb-4" asChild>
                <a href="#" className="dark:text-[#fff]">
                    <Plus className="size-4"/> Add User
                </a>
            </Button>

            <Card className="p-0 gap-0">
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
                            <TableRow className="hover:bg-transparent">
                                <TableCell>
                                    <div className="flex gap-2 items-center">
                                        <Avatar>
                                            <AvatarImage src="" alt="user" />
                                            <AvatarFallback className="bg-violet-100 dark:text-gray-700">SM</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <span>John Doe</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    johndoe@gmail.com
                                </TableCell>
                                <TableCell>
                                    <Badge>active</Badge>
                                </TableCell>
                                <TableCell>
                                    2 days ago
                                </TableCell>
                                <TableCell>
                                    04-21-2025
                                </TableCell>
                                <TableCell className="text-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0 bg-[#f5f5fc] text-[#5955D1] dark:bg-[#02011F]">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem  asChild>
                                                <a href="#">View</a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem  asChild>
                                                <a href="#">Edit</a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem  asChild>
                                                <a href="#">Reset</a>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem  asChild>
                                                <a href="#">Delete</a>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </>
    )
}