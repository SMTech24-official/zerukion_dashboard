"use client";

import { useState } from "react";
import TableSk from "../Skletone/TableSk";
import { MediaButton } from "../ui/icon";
import Modal from "../ui/modal";
import AddVanue from "./AddVanue";
import { useDeleteVenueMutation } from "@/redux/api/vanuesApi";
import { handleApiResponse } from "@/lib/handleRTKResponse";
import { CgSpinner } from "react-icons/cg";

export default function AllVenuesTable({ data, isLoading, isFetching }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(null);

  const [deleteFN, { isLoading: isDeleting }] = useDeleteVenueMutation();

  const handleDelete = async (id: string) => {
    await handleApiResponse(deleteFN, id, "Venue deleted successfully!");
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
              Venue Name
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Address
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Field Size
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Sport
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Price/Hour
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((venue: any, index: number) => {
            return (
              <tr key={index} className="border-t">
                {/* venue Name */}
                <td className="px-6 py-4 text-textColor whitespace-nowrap text-left">
                  {venue.venueName}
                </td>

                {/* Business */}
                <td className="px-6 py-4 text-textColor text-left">
                  {venue.address}
                </td>
                {/* Business */}
                <td className="px-6 py-4 text-textColor text-left">
                  {venue.fieldSize}
                </td>

                {/* Contact */}
                <td className="px-6 py-4 text-textColor text-left">
                  {venue.sportsType || "N/A"}
                </td>

                {/* Venues */}
                <td className="px-6 py-4 text-textColor text-left">
                  {venue.pricePerHour}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-left flex items-center gap-3">
                  <div
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedVenueId(venue.id);
                    }}
                  >
                    <MediaButton type="edit" />
                  </div>

                  <div
                    onClick={() => {
                      handleDelete(venue.id);
                      setSelectedVenueId(venue.id);
                    }}
                  >
                    {isDeleting && selectedVenueId === venue.id ? (
                      <CgSpinner className="animate-spin text-red-500" />
                    ) : (
                      <MediaButton type="cross" />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        // className="bg-white max-w-lg"
      >
        <AddVanue setIsModalOpen={setIsModalOpen} vanueId={selectedVenueId} />
      </Modal>
    </div>
  );
}
