"use client";

import { useState } from "react";
import TableSk from "../Skletone/TableSk";
import { MediaButton } from "../ui/icon";
import Modal from "../ui/modal";
import PartnerDetailsModal from "./PartnersDetailsModal";
import { useRejectPartnerRequestMutation } from "@/redux/api/parnersApi";
import { handleApiResponse } from "@/lib/handleRTKResponse";
import { CgSpinner } from "react-icons/cg";

export default function PartnersTable({ data, isLoading, isFetching }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const [rejectPartnerRequestFN, { isLoading: isRejecting }] =
    useRejectPartnerRequestMutation();
  const handleReject = async (partnerId: string) => {
    // Implement reject logic here
    await handleApiResponse(
      rejectPartnerRequestFN,
      partnerId,
      "Reject Partner Request!"
    );
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
              Partner Name
            </th>
            <th className="text-left px-6 py-3 text-sm font-medium text-textColor">
              Email
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
                : "bg-[#fed5d7] text-red-600";

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
                <td className="px-6 py-4 text-left flex items-center justify-end gap-3">
                  {partner.status !== "Pending" && (
                    <div
                      onClick={() => {
                        setIsModalOpen(true);
                        setSelectedPartner(partner?.id);
                      }}
                    >
                      <MediaButton type="eye" />
                    </div>
                  )}

                  {partner.status === "Pending" && (
                    <div
                      onClick={() => {
                        setIsModalOpen(true);
                        setSelectedPartner(partner?.id);
                      }}
                    >
                      <MediaButton type="check" />
                    </div>
                  )}
                  {partner.status === "Pending" && (
                    <div
                      onClick={() => {
                        handleReject(partner?.id);
                        setSelectedPartner(partner?.id);
                      }}
                    >
                      {isRejecting && selectedPartner === partner?.id ? (
                        <CgSpinner className="animate-spin text-red size-5" />
                      ) : (
                        <MediaButton type="cross" />
                      )}
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        className="bg-white max-w-full md:max-w-[80%] lg:max-w-[35%]"
      >
        <PartnerDetailsModal
          onClose={() => setIsModalOpen(false)}
          partnerId={selectedPartner}
        />
      </Modal>
    </div>
  );
}
