"use client";

import { useGetAllUsersQuery } from "@/redux/api/usersApi";
import { useState } from "react";
import UsersTable from "./UsersTable";

export default function UsersTab({ search }: any) {
  const [activeTab, setActiveTab] = useState(1);

  const { data, isLoading, isFetching, isError } = useGetAllUsersQuery({
    search: search,
    filter:
      activeTab === 1
        ? ""
        : activeTab === 2
        ? "ACTIVE "
        : activeTab === 3
        ? "BANNED"
        : "BANNED",
  });

  const items = [
    {
      key: "1",
      label: "All",
      children: (
        <UsersTable
          data={data?.data?.data}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ),
    },
    {
      key: "2",
      label: "Active",
      children: (
        <UsersTable
          data={data?.data?.data}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ),
    },
    {
      key: "3",
      label: "Banned",
      children: (
        <UsersTable
          data={data?.data?.data}
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
        <ul className="flex items-center w-full md:max-w-[381px]  relative bg-[#0e2f1e] dark:bg-slate-800 rounded-full p-3">
          {/* Animated background */}
          <div
            className={`absolute h-[85%] w-[133px] bg-primaryColor border border-[#24352E] rounded-full transition-all duration-500 ease-in-out mx-2
              ${activeTab === 1 ? "left-0" : ""}
              ${activeTab === 2 ? "left-[100px]" : ""}
              ${activeTab === 3 ? "left-[230px]" : ""}`}
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
