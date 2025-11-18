import React from "react";
import { MediaButton } from "./icon";
interface OverviewCardProps {
  title?: string;
  amount?: string;
  percentage?: string;
  icon?: any;
}

export default function OverviewCard({
  title,
  amount,
  percentage,
  icon,
}: OverviewCardProps) {
  return (
    <div>
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
          <MediaButton type={icon || "pound"} />
        </div>
      </div>
    </div>
  );
}
