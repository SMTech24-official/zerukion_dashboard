"use client";

import { overviewData } from "@/constants/overviewInfo";
import OverviewCard from "../ui/OverviewCard";
import { CustomDropdown } from "../ui/dropdown";
import { useState } from "react";

export default function Dashboard() {
  const [selectedTimeType, setSelectedTimeType] = useState("Month");
  const timeTypes = [
    { value: "Year", label: "Year" },
    { value: "Month", label: "Month" },
    { value: "Week", label: "Week" },
  ];
  return (
    <div className="p-5 md:p-10">
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 py-7">
        {overviewData?.map((data, index: number) => (
          <OverviewCard
            key={index}
            title={data.title}
            amount={data.amount}
            percentage={data.percentage}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
}
