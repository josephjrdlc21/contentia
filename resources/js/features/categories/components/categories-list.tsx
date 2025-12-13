import { CategoryListProps } from "@/types/category"
import { dateOnly, timeAgo } from "@/lib/dates"
import { titleCase, formatId } from "@/lib/strings"

import AppPagination from "@/components/app-pagination"
import CategoriesCreateForm from "@/features/categories/components/categories-create-form"
import CategoriesFilter from "@/features/categories/components/categories-filter"
import CategoriesAction from "@/features/categories/components/categories-action"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

export default function CategoriesList({ record }: CategoryListProps) {
    const categories = Array.isArray(record.data) ? record.data : record.data ? [record.data] : []

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-3 lg:mb-6">
                <>
                    <CategoriesCreateForm />
                    <CategoriesFilter />
                </>
            </div>

            <Card className="p-0 gap-0 shadow-none">
                <div className="px-[20px] py-[16px]">
                    <h6 className="font-semibold">Category List</h6>
                </div>

                <div className="px-4 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="!border-b-0 bg-[#f2f2f699] dark:bg-[#4b5563] hover:bg-[#f2f2f699] dark:bg-[#4b5563]">
                                <TableHead className="min-w-[200px] text-center rounded-l-lg"><b>ID</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Category</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Date</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Last Update</b></TableHead>
                                <TableHead className="min-w-[80px] text-center rounded-r-lg"><b>Action</b></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.length === 0 ? (
                                <TableRow className="hover:bg-transparent">
                                    <TableCell colSpan={5} className="text-center">No Record Found.</TableCell>
                                </TableRow>
                            ) : (
                                categories.map((category) => (
                                    <TableRow key={category.id} className="hover:bg-transparent">
                                        <TableCell className="text-center text-primary">
                                            {formatId(category.id)}
                                        </TableCell>
                                        <TableCell>
                                            {titleCase(category.name)}
                                        </TableCell>
                                        <TableCell>
                                            {dateOnly(category.created_at)}
                                        </TableCell>
                                        <TableCell>
                                            {timeAgo(category.updated_at)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                           <CategoriesAction {...category} />
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