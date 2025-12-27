import { AuditListProps } from "@/types/audit"
import { readableDateTime } from "@/lib/dates"

import AppPagination from "@/components/app-pagination"
import AuditTrailsFilter from "@/features/audit-trails/components/audit-trails-filter"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

export default function AuditTrailsList({ record }: AuditListProps) {
    const audits = Array.isArray(record.data) ? record.data : record.data ? [record.data] : []

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-3 lg:mb-6">
                <div></div>
                <AuditTrailsFilter />
            </div>

            <Card className="p-0 gap-0 shadow-none">
                <div className="px-[20px] py-[16px]">
                    <h6 className="font-semibold">Audit Trail List</h6>
                </div>

                <div className="px-4 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="!border-b-0 bg-[#f2f2f699] dark:bg-[#4b5563] hover:bg-[#f2f2f699] dark:bg-[#4b5563]">
                                <TableHead className="min-w-[200px] rounded-l-lg"><b>User</b></TableHead>
                                <TableHead className="min-w-[200px]"><b>Activity</b></TableHead>
                                <TableHead className="min-w-[200px] rounded-r-lg"><b>Action Date</b></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {audits.length === 0 ? (
                                <TableRow className="hover:bg-transparent">
                                    <TableCell colSpan={5} className="text-center">No Record Found.</TableCell>
                                </TableRow>
                            ) : (
                                audits.map((audit) => (
                                    <TableRow key={audit.id} className="hover:bg-transparent">
                                        <TableCell>
                                            {audit.user?.name ?? 'System'} <br/>
                                            <small>{audit.ip}</small>
                                        </TableCell>
                                        <TableCell>{audit.remarks}</TableCell>
                                        <TableCell>
                                            {readableDateTime(audit.created_at)}
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