"use client";

import { timeTypes } from "@/constants/DropdownInfo";
import {
  useGetDashboardTotalInfoQuery,
  useGetRecentGamesQuery,
  useGetTopRevenueQuery,
} from "@/redux/api/dashboard";
import { useState } from "react";
import OverviewCard from "../ui/OverviewCard";
import { CustomDropdown } from "../ui/dropdown";
import TotalRevenue from "./TotalRevenue";
import TopVenuesRevenue from "./TopVenuesRevenue";
import RecentGames from "./RecentGames";

export default function Dashboard() {
  const [selectedTimeType, setSelectedTimeType] = useState("Month");
  const { data: totalData } = useGetDashboardTotalInfoQuery("");
  const { data: topRevenue } = useGetTopRevenueQuery("");
  const { data: recentGames } = useGetRecentGamesQuery("");

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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
        <OverviewCard
          title="Total Revenue"
          amount={totalData?.data?.totalRevenue}
          icon="pound"
        />
        <OverviewCard
          title="Total Games"
          amount={totalData?.data?.totalMatches}
          icon="calender"
        />
        <OverviewCard
          title="Total Players"
          amount={totalData?.data?.totalPlayers}
          icon="man"
        />
        <OverviewCard
          title="Total Partners"
          amount={totalData?.data?.totalPartners}
          icon="groupOfMan"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <TotalRevenue revenue={topRevenue?.data?.totalRevenueBySport} />
        <TopVenuesRevenue data={topRevenue?.data?.topVenuesByRevenue} />
      </div>
      <div>
        <RecentGames data={recentGames?.data?.recentGames} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
        <OverviewCard
          title="Confirmed Games"
          amount={recentGames?.data?.confirmedGames?.count}
          percentage={`${recentGames?.data?.confirmedGames?.percentage}% of total games`}
        />
        <OverviewCard
          title="Pending Games"
          amount={recentGames?.data?.pendingGames?.count}
          percentage={`${recentGames?.data?.pendingGames?.percentage}% of total games`}
        />
        <OverviewCard
          title="Canceled Games"
          amount={recentGames?.data?.cancelledGames?.count}
          percentage={`${recentGames?.data?.cancelledGames?.percentage}% of total games`}
        />
      </div>
    </div>
  );
}
