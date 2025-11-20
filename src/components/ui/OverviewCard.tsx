import React from "react";
import { MediaButton } from "./icon";
import OverviewCardSk from "../Skletone/OverviewCardSk";
interface OverviewCardProps {
  title?: string;
  amount?: string;
  percentage?: string;
  icon?: any;
  isLoading?: boolean;
  isError?: boolean;
}

export default function OverviewCard({
  title,
  amount,
  percentage,
  icon,
  isLoading,
  isError,
}: OverviewCardProps) {
  if (isError) {
    return <div className="text-red-500 mt-4">Failed to load data.</div>;
  }

  return (
    <div>
      {isLoading ? (
        <OverviewCardSk />
      ) : (
        <div className="bg-white rounded-2xl border border-borderColor p-6 shadow-custom flex justify-between w-full">
          <div>
            <h1 className="text-textColor text-base xl:text-xl font-medium leading-[150%] mb-3 truncate line-clamp-1 w-full">
              {title}
            </h1>
            <h1 className="text-textColor text-2xl font-medium leading-[150%]">
              {amount}
            </h1>
            <h1 className="text-textColor text-xs font-medium leading-[150%]">
              {percentage}
            </h1>
          </div>
          <div>
            <MediaButton type={icon} />
          </div>
        </div>
      )}
    </div>
  );
}
