"use client";

import Image from "next/image";
import TableSk from "../Skletone/TableSk";
import { MediaButton } from "../ui/icon";
import defaultImage from "@/assets/placeholder.webp";
import { useState } from "react";
import CreateGameByvanue from "../Calendar/CreateGameByvanue";
import Modal from "../ui/modal";
import { handleApiResponse } from "@/lib/handleRTKResponse";
import { useDeleteGamesMutation } from "@/redux/api/gamesApi";
import { CgSpinner } from "react-icons/cg";

export default function GamesTable({ data, isLoading, isFetching }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [deleteFN, { isLoading: isDeleting }] = useDeleteGamesMutation();
  const handleDelete = async (id: string) => {
    setSelectedId(id);
    await handleApiResponse(deleteFN, id, "Games deleted successfully!");
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
              Image
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Titel
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Location
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Sport
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Date & Time
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Price
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Duration
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Players
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
              game.status === "Upcoming"
                ? "bg-blue-100 text-blue-600"
                : game.status === "Pending"
                ? "bg-yellow-100 text-yellow-600"
                : game.status === "Full"
                ? "bg-purple-100 text-purple-600"
                : game.status === "Ongoing"
                ? "bg-orange-100 text-orange-600"
                : game.status === "Completed"
                ? "bg-green-100 text-green-600"
                : game.status === "Cancelled"
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600";

            return (
              <tr key={index} className="border-t">
                {/* Image */}
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  <Image
                    src={game.bannerImage || defaultImage}
                    alt="Banner"
                    width={60}
                    height={40}
                    className="rounded-md object-cover"
                  />
                </td>

                {/* Venue */}
                <td className="px-6 py-4 text-textColor text-left">
                  {game.title}
                </td>
                <td className="px-6 py-4 text-textColor text-left">
                  {game.location}
                </td>

                {/* Sport */}
                <td className="px-6 py-4 text-textColor text-left">
                  {game.sportsType}
                </td>

                {/* Date & Time */}
                <td className="px-6 py-4 text-textColor text-left">
                  {formatDate(game.date)} {formatTime(game.time)}
                </td>

                {/* Price */}
                <td className="px-6 py-4 text-textColor text-left">
                  ${game.price}
                </td>

                {/* Fee (No Fee in API) */}
                <td className="px-6 py-4 text-textColor text-left">
                  {game?.playingDuration}
                </td>

                {/* Players */}
                <td className="px-6 py-4 text-textColor text-left">
                  {game.totalJoinedPlayers}/{game.maximumPlayers}
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
                  <div className="text-left flex items-center gap-3">
                    <div
                      onClick={() => {
                        setIsModalOpen(true);
                        setSelectedId(game.id);
                      }}
                    >
                      <MediaButton type="edit" />
                    </div>
                    <div onClick={() => handleDelete(game.id)}>
                      {isDeleting && selectedId === game.id ? (
                        <CgSpinner className="animate-spin text-red-500" />
                      ) : (
                        <MediaButton type="cross" />
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <CreateGameByvanue
          gameId={selectedId}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </div>
  );
}
