"use client";
import { useState } from "react";
import OverviewCard from "../ui/OverviewCard";
import Search from "../ui/search";
import { MediaButton } from "../ui/icon";
import PartnersTab from "./PartnersTab";
import { useGetAllStatisticsQuery } from "@/redux/api/parnersApi";

export default function Partners() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useGetAllStatisticsQuery("");

  return (
    <div className="p-5 md:p-10 space-y-7">
      <div className=" flex justify-end">
        <Search value={search} onChange={setSearch} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
        <OverviewCard
          title="Pending Applications"
          amount={data?.data?.pendingRequests}
          icon="applicaton"
          percentage="Awaiting review"
          isError={isError}
          isLoading={isLoading}
        />
        <OverviewCard
          title="Active Partners"
          amount={data?.data?.activePartners}
          icon="groupOfMan"
          percentage="Approved venues"
          isError={isError}
          isLoading={isLoading}
        />
        <OverviewCard
          title="Partner Revenue"
          amount={data?.data?.totalPartnerRevenue}
          icon="pound"
          percentage="Total generated"
          isError={isError}
          isLoading={isLoading}
        />
      </div>

      <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
        <div className="flex items-center gap-3">
          <MediaButton type="groupOfMan" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            All Partners
          </h1>
        </div>
        <PartnersTab />
      </div>
    </div>
  );
}
