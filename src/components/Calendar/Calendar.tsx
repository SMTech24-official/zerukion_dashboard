"use client";

import { useGetAvailableVenuesQuery } from "@/redux/api/vanuesApi";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { MediaButton } from "../ui/icon";
import VanuesCard, { VenueProps } from "./VanuesCard";
import { useState } from "react";
import VenueCardSk from "../Skletone/VenueCardSk";

export default function Calendar() {
  const [isDate, setIsDate] = useState<string | undefined>();
  const onChange: DatePickerProps["onChange"] = (date) => {
    if (date) {
      const formatted = date.format("YYYY-MM-DD");
      setIsDate(formatted);
    }
  };

  const {
    data: vanues,
    isLoading,
    isFetching,
  } = useGetAvailableVenuesQuery({ date: isDate });

  return (
    <div className="p-5 md:p-10 space-y-7">
      {/* header  */}
      <div className="flex justify-end">
        <div className="w-48">
          <Space direction="vertical">
            <DatePicker
              onChange={onChange}
              className="custom-date-picker p-2 border-2 border-primaryColor text-primaryColor font-bold"
              placeholder="Select date"
            />
          </Space>
        </div>
      </div>

      <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
        <div className="flex items-center gap-3">
          <MediaButton type="venus" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            Available All Venus
          </h1>
        </div>
        {isLoading || isFetching ? (
          <VenueCardSk />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
            {vanues?.data.map((venue: VenueProps, index: number) => (
              <VanuesCard key={index} data={venue} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
