import React from "react";
import { MediaButton } from "../ui/icon";
import TableSk from "../Skletone/TableSk";

export default function RecentGames({ data, isLoading, isError }: any) {
  return (
    <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
      <div className="flex items-center gap-3">
        <MediaButton type="recent" />
        <h1 className="text-textColor text-xl font-medium leading-[150%]">
          Recent Games
        </h1>
      </div>
      {isError && (
        <div className="text-red-500 mt-4">Failed to load recent games.</div>
      )}
      <div className="w-full overflow-x-auto ">
        {isLoading ? (
          <TableSk />
        ) : (
          <table className="min-w-full bg-white  rounded-xl overflow-x-auto">
            <thead className="">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Game ID
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Venue
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Sport
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Date
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Players
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.map((game: any, index: number) => {
                const totalPlayers =
                  (game.teamAPlayers || 0) + (game.teamBPlayers || 0);

                const formattedDate = new Date(game.date).toLocaleDateString();

                // Badge color based on status
                const statusColor =
                  game.status === "Upcoming"
                    ? "bg-blue-100 text-blue-600"
                    : game.status === "Ongoing"
                    ? "bg-yellow-100 text-yellow-600"
                    : game.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600";

                return (
                  <tr key={index} className="border-t">
                    {/* GAME ID */}
                    <td className="px-6 py-4 text-textColor whitespace-nowrap">
                      G: {game.id.slice(-3)}
                    </td>
                    {/* VENUE */}
                    <td className="px-6 py-4 text-textColor">
                      {game.venue?.venueName}
                    </td>
                    {/* SPORT */}
                    <td className="px-6 py-4 text-textColor">
                      {game.sportsType}
                    </td>
                    {/* DATE */}
                    <td className="px-6 py-4 text-textColor">
                      {formattedDate}
                    </td>

                    {/* PLAYERS */}
                    <td className="px-6 py-4 text-textColor">{totalPlayers}</td>
                    {/* STATUS BADGE */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                      >
                        {game.status}
                      </span>
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
