"use client";

import { formatDate } from "@/lib/dateFormate";
import TableSk from "../Skletone/TableSk";

export default function PaymentTransactionsTable({
  data,
  isLoading,
  isFetching,
}: any) {
  if (isLoading || isFetching) {
    return <TableSk />;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl overflow-x-auto">
        <thead>
          <tr>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Payment ID
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Name
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Sport
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Date
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Total
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.map((payment: any, index: number) => {
            const statusColor =
              payment.status === "Pending"
                ? "bg-yellow-100 text-yellow-600"
                : payment.status === "Completed"
                ? "bg-green-100 text-green-600"
                : "bg-[#fed5d7] text-red-600";

            return (
              <tr key={index} className="border-t">
                {/* Payment ID */}
                <td className="px-6 py-4 text-textColor whitespace-nowrap text-left">
                  {payment.id}
                </td>

                {/* Name */}
                <td className="px-6 py-4 text-textColor text-left">
                  {payment.user?.fullName || "N/A"}
                </td>

                {/* Sport / Match Title */}
                <td className="px-6 py-4 text-textColor text-left">
                  {payment.match?.title || "N/A"}
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-textColor text-left">
                  {formatDate(payment.createdAt)}
                </td>

                {/* Total */}
                <td className="px-6 py-4 text-textColor text-left">
                  ${payment.amount}
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-left">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
