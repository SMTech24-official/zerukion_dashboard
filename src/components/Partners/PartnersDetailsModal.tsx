"use client";

import { useEffect, useState } from "react";
import { formatDate } from "@/lib/dateFormate";
import { handleApiResponse } from "@/lib/handleRTKResponse";
import {
  useAcceptPartnerRequestMutation,
  useGetSingleParnersQuery,
} from "@/redux/api/parnersApi";
import { cn } from "@/lib/utils";
import { PartnerDetailsSk } from "../Skletone/PartnerDetailsModalSk";

interface PartnerDetailsModalProps {
  onClose: () => void;
  partnerId: string | null;
}

export default function PartnerDetailsModal({
  onClose,
  partnerId,
}: PartnerDetailsModalProps) {
  const { data, isLoading, isFetching } = useGetSingleParnersQuery(partnerId, {
    skip: !partnerId,
  });
  const partnerInfo = data?.data;

  const [commissionRate, setCommissionRate] = useState<number>(0);
  const [isFounder, setIsFounder] = useState<boolean>(false);

  // Sync initial state with API
  useEffect(() => {
    if (partnerInfo) {
      setIsFounder(partnerInfo.isFounder);
      setCommissionRate(partnerInfo.isFounder ? 0 : partnerInfo.commissionRate);
    }
  }, [partnerInfo]);

  const [acceptPartnerRequestFN, { isLoading: isUpdating }] =
    useAcceptPartnerRequestMutation();

  const handleSave = async () => {
    const partnerData = {
      partnerRequestId: partnerId,
      commissionRate: isFounder ? 0 : commissionRate,
      isFounder: isFounder,
    };

    const res = await handleApiResponse(
      acceptPartnerRequestFN,
      partnerData,
      "Update Partner Commission!"
    );

    if (res.success) {
      onClose();
    }
  };

  if (isLoading || isFetching) {
    return <PartnerDetailsSk />;
  }

  return (
    <>
      <div className="">
        <div className="space-y-5">
          {/* Header */}
          <div className="border-b border-borderColor text-left">
            <h2 className="text-xl font-semibold text-textColor">
              Partners Details
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              View and manage partner information
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Partner Information Section */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partner Name
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    {partnerInfo?.fullName}
                  </p>
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <p className="text-base font-semibold text-gray-900 text-wrap break-words">
                    {partnerInfo?.phone || "N/A"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    {partnerInfo?.email}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Applied Date
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    {formatDate(partnerInfo?.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between max-w-80">
                <label className=" text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>

                <span
                  className={cn(
                    "inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full",
                    partnerInfo?.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : partnerInfo?.status === "Accepted"
                      ? "bg-green-100 text-green-600"
                      : "bg-[#fed5d7] text-red-600"
                  )}
                >
                  {partnerInfo?.status}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />
            {partnerInfo?.status !== "Rejected" && (
              <div>
                {/* Revenue & Commission Section */}
                <div>
                  <h3 className="text-lg font-semibold text-left text-textColor mb-4">
                    Revenue & Commission
                  </h3>
                  <div className="grid grid-cols-2 text-left gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Revenue
                      </label>
                      <p className="text-2xl font-bold text-gray-900">
                        €{partnerInfo?.totalRevenue}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Venues
                      </label>
                      <p className="text-2xl font-bold text-gray-900">
                        {partnerInfo?.totalVenues}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Commission Settings Section */}
                <div>
                  <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-between mb-6 gap-4 md:gap-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Commission Settings
                    </h3>

                    {/* Founder Toggle Button */}
                    <button
                      onClick={() => {
                        const newFounderState = !isFounder;
                        setIsFounder(newFounderState);
                        setCommissionRate(
                          newFounderState ? 0 : partnerInfo?.commissionRate
                        );
                      }}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                        isFounder
                          ? "bg-primaryColor text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {isFounder ? "Remove Founder Status" : "Mark as Founder"}
                    </button>
                  </div>

                  {/* Commission Input */}
                  <div>
                    <label
                      htmlFor="commission"
                      className="block text-sm text-left font-medium text-textColor mb-3"
                    >
                      Commission Rate (%)
                    </label>

                    <input
                      id="commission"
                      type="number"
                      value={isFounder ? 0 : commissionRate}
                      onChange={(e) =>
                        setCommissionRate(Number(e.target.value))
                      }
                      disabled={isFounder}
                      min="0"
                      max="100"
                      step="1"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />

                    <p className="text-xs text-gray-500 mt-2">
                      Standard range: 5-10%. Custom rates can be set for
                      individual partners.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {partnerInfo?.status !== "Rejected" && (
            <div className=" bottom-0 bg-white border-t border-gray-200  py-4 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                {isUpdating ? "Saving..." : "Save Commission"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
