"use client";

import { CustomDropdown } from "@/components/ui/dropdown";
import OverviewCard from "@/components/ui/OverviewCard";
import { timeTypes } from "@/constants/DropdownInfo";
import {
  useGetPargtnerStaticsQuery,
  useGetPartnerRecentGamesQuery,
} from "@/redux/api/partnerDashboard";
import { useState } from "react";
import RecentGames from "./RecentGames";

export default function PartnerDashboard() {
  const [selectedTimeType, setSelectedTimeType] = useState("Month");
  const {
    data: totalData,
    isLoading: isTotalDataLoading,
    isFetching: isTotalDataFetching,
    isError: isTotalDataError,
  } = useGetPargtnerStaticsQuery("");

  const {
    data: recentGames,
    isLoading: isRecentGamesLoading,
    isFetching: isRecentGamesFetching,
    isError: isRecentGamesError,
  } = useGetPartnerRecentGamesQuery("");

  console.log(recentGames?.data);
  return (
    <div className="p-5 md:p-10 space-y-7">
      <div className=" flex justify-end">
        <div className="w-48">
          <CustomDropdown
            options={timeTypes}
            value={selectedTimeType}
            onChange={setSelectedTimeType}
            placeholder="Select a time type"
          />
        </div>
      </div>
      {/* header cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
        <OverviewCard
          title="Total Revenue"
          amount={totalData?.data?.totalRevenue}
          isLoading={isTotalDataLoading || isTotalDataFetching}
          isError={isTotalDataError}
          icon="pound"
          footer="All time earnings"
        />
        <OverviewCard
          title="Total Venues"
          amount={totalData?.data?.activeVenues}
          isLoading={isTotalDataLoading || isTotalDataFetching}
          icon="calender"
          isError={isTotalDataError}
          footer="Registered venues"
        />
      </div>

      {/* recent games  */}
      <div>
        <RecentGames
          data={recentGames?.data}
          isLoading={isRecentGamesLoading || isRecentGamesFetching}
          isError={isRecentGamesError}
        />
      </div>
    </div>
  );
}
