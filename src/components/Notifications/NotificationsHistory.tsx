"use client";

import { useGetAllNotificationsQuery } from "@/redux/api/notificationApi";
import TableSk from "../Skletone/TableSk";
import { formatDate } from "@/lib/dateFormate";

export default function NotificationsHistory() {
  const { data, isLoading, isError } = useGetAllNotificationsQuery("");

  return (
    <div>
      {isError && (
        <div className="text-red-500 mt-4">Failed to load notifications.</div>
      )}
      <div className="w-full overflow-x-auto ">
        {isLoading ? (
          <TableSk />
        ) : (
          <table className="min-w-full bg-white  rounded-xl overflow-x-auto">
            <thead className="">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Type
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Message
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Title
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Date
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((notification: any, index: number) => {
                // Badge color based on status
                const statusColor =
                  notification.type === "General"
                    ? "bg-blue-100 text-blue-600"
                    : notification.status === "Automatic"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600";

                return (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                      >
                        {notification.type}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-textColor max-w-96">
                      {notification.body}
                    </td>

                    <td className="px-6 py-4 text-textColor">
                      {notification.title}
                    </td>

                    <td className="px-6 py-4 text-textColor">
                      {formatDate(notification.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-textColor">
                      <button
                        className={`bg-[#dcfce7] text-primaryColor px-2 text-sm font-light rounded-full`}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
