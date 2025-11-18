"use client";

import React, { useState } from "react";
import { MediaButton } from "../ui/icon";
import Modal from "../ui/modal";
import CreateGameByvanue from "./CreateGameByvanue";

export interface VenueProps {
  id: string;
  venueName: string;
  address: string;
  sportsType: string;
  pricePerHour: number;
  fieldSize: string;
  isDeleted?: boolean;
}
interface Props {
  data: VenueProps;
}

export default function VenueCard({ data }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vanueId, setVanueId] = useState<string | null>(null);
  return (
    <div className="bg-[#dcfce7] border-2 border-primaryColor rounded-2xl p-6 cursor-pointer">
      <div
        onClick={() => {
          setIsModalOpen(true);
          setVanueId(data?.id);
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-6 text-[#0A0A0A]">
            {data?.venueName}
          </p>

          <div
            className={`rounded-full px-2 ${
              data?.isDeleted ? "bg-red-500" : "bg-primaryColor"
            }`}
          >
            <p className="text-sm text-white leading-6">
              {data?.isDeleted ? "Unavailable" : "Available"}
            </p>
          </div>
        </div>
        {/* Address section */}
        <div className="flex items-center gap-2 mt-1">
          <MediaButton type="location" />
          <p className="text-sm font-normal leading-6 text-paragraphColor">
            {data?.address}
          </p>
        </div>

        {/* Sport */}
        <div className="mt-12">
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal leading-6 text-paragraphColor">
                Sport
              </p>
              <div className="border-2 border-[#c6e3d0] rounded-xl px-2">
                <p className="text-sm text-paragraphColor leading-6">
                  {data?.sportsType}
                </p>
              </div>
            </div>
          </div>

          {/* Price and field size */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-sm text-paragraphColor flex items-center justify-between">
              Field Size:
            </p>
            <p className="font-semibold text-sm text-paragraphColor">
              {data?.fieldSize}
            </p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-sm text-paragraphColor">Price/hr: </p>
            <p className="text-sm text-primaryColor font-semibold flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 5C2 4.72386 2.22386 4.5 2.5 4.5H6.5C6.77615 4.5 7 4.72386 7 5C7 5.27615 6.77615 5.5 6.5 5.5H2.5C2.22386 5.5 2 5.27615 2 5ZM2 7C2 6.72385 2.22386 6.5 2.5 6.5H6.5C6.77615 6.5 7 6.72385 7 7C7 7.27615 6.77615 7.5 6.5 7.5H2.5C2.22386 7.5 2 7.27615 2 7Z"
                  fill="#00a63e"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 5C3 2.82929 4.6334 1 6.73075 1C8.1082 1 9.29395 1.79712 9.93695 2.95317C10.0712 3.19449 9.98435 3.49894 9.74305 3.63316C9.5017 3.76739 9.19725 3.68057 9.06305 3.43924C8.57535 2.56246 7.7038 2 6.73075 2C5.25955 2 4 3.30471 4 5V7C4 8.6953 5.25955 10 6.73075 10C7.7038 10 8.57535 9.43755 9.06305 8.56075C9.19725 8.31945 9.5017 8.2326 9.74305 8.36685C9.98435 8.50105 10.0712 8.8055 9.93695 9.04685C9.29395 10.2029 8.1082 11 6.73075 11C4.6334 11 3 9.1707 3 7V5Z"
                  fill="#00a63e"
                />
              </svg>
              {data?.pricePerHour}
            </p>
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        // className="bg-white max-w-lg"
      >
        <CreateGameByvanue vanueId={vanueId} />
      </Modal>
    </div>
  );
}
