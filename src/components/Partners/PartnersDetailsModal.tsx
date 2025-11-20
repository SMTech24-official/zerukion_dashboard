"use client";

import { useState } from "react";

interface PartnerDetailsModalProps {
  onClose: () => void;
}

export default function PartnerDetailsModal({
  onClose,
}: PartnerDetailsModalProps) {
  const [commissionRate, setCommissionRate] = useState("7.5");
  const [isFounder, setIsFounder] = useState(false);

  const handleSave = () => {
    onClose();
  };

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
              <div className="grid grid-cols-2 text-left gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partner Name
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    John Smith
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    Central Sports Complex
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 text-left gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    john@centralsports.com
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    +1 (555) 345-6789
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 text-left gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    approved
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Applied Date
                  </label>
                  <p className="text-base font-semibold text-gray-900">
                    10/20/2025
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

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
                  <p className="text-2xl font-bold text-gray-900">€45,600</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Venues
                  </label>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Commission Settings Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Commission Settings
                </h3>
                <button
                  onClick={() => setIsFounder(!isFounder)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isFounder
                      ? "bg-primaryColor text-white "
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {isFounder ? "Remove Founder Status" : "Mark as Founder"}
                </button>
              </div>

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
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(e.target.value)}
                  step="0.1"
                  min="0"
                  max="100"
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Standard range: 5-10%. Custom rates can be set for individual
                  partners.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
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
              Save Commission
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
