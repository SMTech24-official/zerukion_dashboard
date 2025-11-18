"use client";

import React, { useState } from "react";
import PartnersTable from "./PartnersTable";
import { useGetAllParnersQuery } from "@/redux/api/parnersApi";

export default function PartnersTab() {
  const [activeTab, setActiveTab] = useState(1);
  const { data, isLoading, isFetching, isError } = useGetAllParnersQuery({
    status:
      activeTab === 1
        ? "All"
        : activeTab === 2
        ? "Pending"
        : activeTab === 3
        ? "Accepted"
        : "Rejected",
  });

  const items = [
    {
      key: "1",
      label: "All",
      children: (
        <PartnersTable
          data={data?.data}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ),
    },
    {
      key: "2",
      label: "Pending",
      children: (
        <PartnersTable
          data={data?.data}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ),
    },
    {
      key: "3",
      label: "Approved",
      children: (
        <PartnersTable
          data={data?.data}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ),
    },
    {
      key: "4",
      label: "Reject",
      children: (
        <PartnersTable
          data={data?.data}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ),
    },
  ];

  if (isError) {
    return (
      <div className="text-red-500 py-5">Error loading partners data.</div>
    );
  }

  return (
    <>
      <div className="py-5 overflow-x-auto">
        {/* Tabs */}
        <ul className="flex items-center w-full md:max-w-[535px]  relative bg-[#0e2f1e] dark:bg-slate-800 rounded-full p-3">
          {/* Animated background */}
          <div
            className={`absolute h-[85%] w-[133px] bg-primaryColor border border-[#24352E] rounded-full transition-all duration-500 ease-in-out mx-2
              ${activeTab === 1 ? "left-0" : ""}
              ${activeTab === 2 ? "left-[108px]" : ""}
              ${activeTab === 3 ? "left-[248px]" : ""}
              ${activeTab === 4 ? "left-[388px]" : ""}
              `}
          ></div>

          {items.map((item, index) => (
            <li
              key={index}
              className={`${
                item.key === activeTab.toString() ? "text-white" : "text-white"
              } px-5 md:px-10 py-2 z-10 transition duration-300 cursor-pointer truncate`}
              onClick={() => setActiveTab(Number(item.key))}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Active tab content */}
      <div className="text-center overflow-auto">
        {items.find((item) => item.key === activeTab.toString())?.children}
      </div>
    </>
  );
}
