"use client";

import { handleApiResponse } from "@/lib/handleRTKResponse";
import { useUpdateUserStatusMutation } from "@/redux/api/usersApi";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoBanOutline } from "react-icons/io5";
import { PiUserCheckLight } from "react-icons/pi";
import TableSk from "../Skletone/TableSk";

export default function UsersTable({ data, isLoading, isFetching }: any) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const [updateStatusFN, { isLoading: isUpdating }] =
    useUpdateUserStatusMutation();

  const handleUpdate = async (id: string) => {
    setSelectedId(id);
    await handleApiResponse(updateStatusFN, id, "Games deleted successfully!");
  };

  if (isLoading || isFetching) {
    return <TableSk />;
  }
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl overflow-x-auto">
        <thead>
          <tr>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Name
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Email
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Joined
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Games Played
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Level
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
          {data?.map((game: any, index: number) => {
            const statusColor =
              game.status === "ACTIVE"
                ? "bg-[#dcfce7] text-[#016630]"
                : game.status === "BANNED"
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600";

            const levelColor =
              game.level === "All"
                ? "bg-yellow-100 text-yellow-600"
                : game.level === "Beginner"
                ? "bg-purple-100 text-purple-600"
                : game.level === "Intermediate"
                ? "bg-orange-100 text-orange-600"
                : game.level === "Advanced"
                ? "bg-green-100 text-green-600"
                : "";

            return (
              <tr key={index} className="border-t">
                {/* Venue */}
                <td className="px-6 py-4 text-textColor text-left">
                  {game.fullName}
                </td>
                <td className="px-6 py-4 text-textColor text-left">
                  {game.email}
                </td>

                {/* Sport */}
                <td className="px-6 py-4 text-textColor text-left">
                  {formatDate(game.createdAt)}
                </td>

                {/* Price */}
                <td className="px-6 py-4 text-textColor text-left">
                  {game.level}
                </td>

                {/* Fee (No Fee in API) */}
                <td className="px-6 py-4 text-textColor ">
                  <div
                    className={`px-1 py-1 rounded-full text-xs font-medium w-24 ${levelColor}`}
                  >
                    {game?.level}
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-left">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                  >
                    {game.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 ">
                  {game.status === "ACTIVE" ? (
                    <button
                      onClick={() => handleUpdate(game.id)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors border-2 border-borderColor flex items-center gap-2`}
                    >
                      {isUpdating && selectedId === game.id ? (
                        <CgSpinner className="animate-spin text-gray-200 size-4" />
                      ) : (
                        <IoBanOutline className="size-4" />
                      )}
                      Ban
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdate(game.id)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors border-2 border-borderColor flex items-center gap-2`}
                    >
                      {isUpdating && selectedId === game.id ? (
                        <CgSpinner className="animate-spin text-gray-200 size-4" />
                      ) : (
                        <PiUserCheckLight className="size-4" />
                      )}
                      UnBan
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
