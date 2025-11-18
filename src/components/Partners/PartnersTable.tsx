import React from "react";
import TableSk from "../Skletone/TableSk";

export default function PartnersTable({ data, isLoading, isFetching }: any) {
  if (isLoading || isFetching) {
    return <TableSk />;
  }
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl overflow-x-auto">
        <thead>
          <tr>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Partner Name
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Business
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Contact
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Venues
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Commission
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Revenue
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Status
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((partner: any, index: number) => {
            // Status badge color
            const statusColor =
              partner.status === "Pending"
                ? "bg-yellow-100 text-yellow-600"
                : partner.status === "Accepted"
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600";

            return (
              <tr key={index} className="border-t">
                {/* Partner Name */}
                <td className="px-6 py-4 text-textColor whitespace-nowrap text-left">
                  {partner.partnerName}
                </td>

                {/* Business */}
                <td className="px-6 py-4 text-textColor text-left">
                  {partner.email}
                </td>

                {/* Contact */}
                <td className="px-6 py-4 text-textColor text-left">
                  {partner.phone || "N/A"}
                </td>

                {/* Venues */}
                <td className="px-6 py-4 text-textColor text-left">
                  {partner.totalVenues}
                </td>

                {/* Commission */}
                <td className="px-6 py-4 text-textColor text-left">
                  {partner.commissionRate}%
                </td>

                {/* Revenue */}
                <td className="px-6 py-4 text-textColor text-left">
                  ${partner.totalRevenue}
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-left">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                  >
                    {partner.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-left">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
