"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { MediaButton } from "../ui/icon";
import AllVenuesTable from "./AllVenuesTable";
import { useGetAllVenuesQuery } from "@/redux/api/vanuesApi";
import Modal from "../ui/modal";
import AddVanue from "./AddVanue";

export default function Venues() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isFetching, isError } = useGetAllVenuesQuery("");

  return (
    <div className="p-5 md:p-10 space-y-7">
      {/* header  */}
      <div className="flex justify-end w-full">
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="default"
          className="w-48"
        >
          Add Venue
        </Button>
      </div>


      <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
        <div className="flex items-center gap-3">
          <MediaButton type="allVenues" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            Available All Venus
          </h1>
        </div>
        
        <div className="mt-5">
          {isError && (
            <p className="text-red-500">Failed to load venues data.</p>
          )}
          <AllVenuesTable
            data={data?.data?.data}
            isLoading={isLoading}
            isFetching={isFetching}
          />
        </div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        // className="bg-white max-w-lg"
      >
        <AddVanue setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}
