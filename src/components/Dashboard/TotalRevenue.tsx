import React from "react";
import { MediaButton } from "../ui/icon";
import RevenueSk from "../Skletone/RevenueSk";
export interface RevenueProps {
  sportsType: string;
  totalGames: number;
  totalRevenue?: number;
  percentage: number;
}

export default function TotalRevenue({
  revenue,
  isLoading,
  isError,
}: {
  revenue: any;
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
      <div className="flex items-center gap-3">
        <MediaButton type="awared" />
        <h1 className="text-textColor text-xl font-medium leading-[150%]">
          Total Revenue
        </h1>
      </div>
      {isError && (
        <div className="text-red-500 mt-4">Failed to load revenue data.</div>
      )}
      <div className="space-y-5 mt-5">
        {isLoading ? (
          <RevenueSk />
        ) : (
          revenue?.map((item: RevenueProps, index: number) => (
            <div key={index} className="">
              <div className="flex items-center justify-between">
                <p className=" text-sm md:text-base font-normal leading-6 text-textColor">
                  {item?.sportsType}
                </p>
                <p className="text-paragraphColor text-sm font-normal leading-6">
                  {item?.totalGames} games ({item?.percentage}%)
                </p>
              </div>
              <div className="relative bg-gray-200 h-[15px] rounded-full w-full mt-2">
                <div
                  className="absolute dark:bg-slate-700 top-0 left-0 bg-primaryColor h-full rounded-full"
                  style={{ width: `${item?.percentage}%` }}
                ></div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
