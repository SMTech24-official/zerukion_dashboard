"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { MediaButton } from "../ui/icon";
import NotificationsHistory from "./NotificationsHistory";
import Modal from "../ui/modal";
import CreateNotification from "./CreateNotification";

export default function Notifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-5 md:p-10 space-y-7">
      {/* header  */}
      <div className="flex justify-end w-full">
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="default"
          className="w-48"
        >
          Send Notification
        </Button>
      </div>
      {/* Automatic Notification Rules */}
      <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
        <div className="flex items-center gap-3">
          <MediaButton type="notification" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            Automatic Notification Rules
          </h1>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between p-3 border-2 rounded-2xl">
            <div>
              <p className="text-base text-secondaryColor font-normal leading-[150%]">
                Game Confirmed
              </p>
              <p className="text-sm text-[#717182] font-normal leading-[150%]">
                Sent when minimum players reached
              </p>
            </div>
            <button className={`bg-primaryColor text-white px-2 rounded-full`}>
              Active
            </button>
          </div>
          <div className="flex items-center justify-between p-3 border-2 rounded-2xl">
            <div>
              <p className="text-base text-secondaryColor font-normal leading-[150%]">
                Game Cancelled
              </p>
              <p className="text-sm text-[#717182] font-normal leading-[150%]">
                Sent with refund information
              </p>
            </div>
            <button className={`bg-primaryColor text-white px-2 rounded-full`}>
              Active
            </button>
          </div>
          <div className="flex items-center justify-between p-3 border-2 rounded-2xl">
            <div>
              <p className="text-base text-secondaryColor font-normal leading-[150%]">
                Almost Full Alert
              </p>
              <p className="text-sm text-[#717182] font-normal leading-[150%]">
                Sent 4 hours before when 2-3 spots left
              </p>
            </div>
            <button className={`bg-primaryColor text-white px-2 rounded-full`}>
              Active
            </button>
          </div>
        </div>
      </div>

      {/* Notification History */}
      <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
        <div className="flex items-center gap-3 mb-4">
          <MediaButton type="notification" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            Notification History
          </h1>
        </div>
        <NotificationsHistory />
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <CreateNotification setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}
