"use client";

import { useState } from "react";
import { MediaButton } from "../ui/icon";
import PaymentTransactionsTable from "./PaymentTransactionsTable";
import { useGetAllPaymentsQuery } from "@/redux/api/paymentApi";

export default function PaymentTab() {
  const [activeTab, setActiveTab] = useState(1);
  const { data } = useGetAllPaymentsQuery({
    filter:
      activeTab === 1
        ? ""
        : activeTab === 2
        ? "Pending"
        : activeTab === 3
        ? "Completed"
        : activeTab === 4
        ? "Refunded"
        : activeTab === 5
        ? "Failed"
        : "Cancelled",
  });


  const items = [
    {
      key: "1",
      label: "All",
      children: <PaymentTransactionsTable data={data?.data?.data} />,
    },
    {
      key: "2",
      label: "Pending",
      children: <PaymentTransactionsTable data={data?.data?.data} />,
    },
    {
      key: "3",
      label: "Completed",
      children: <PaymentTransactionsTable data={data?.data?.data} />,
    },
    {
      key: "4",
      label: "Refunded",
      children: <PaymentTransactionsTable data={data?.data?.data} />,
    },
    {
      key: "5",
      label: "Failed",
      children: <PaymentTransactionsTable data={data?.data?.data} />,
    },
    {
      key: "6",
      label: "Cancel",
      children: <PaymentTransactionsTable data={data?.data?.data} />,
    },
  ];

  return (
    <div className="">
      <div className="bg-white p-5 border border-borderColor rounded-2xl  shadow-custom ">
        <div className="flex items-center gap-3">
          <MediaButton type="groupOfMan" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            Payment Transactions
          </h1>
        </div>
        <div className="py-5 overflow-x-auto">
          {/* Tabs */}
          <ul className="flex items-center w-full md:max-w-[823px]  relative bg-[#0e2f1e] dark:bg-slate-800 rounded-full p-3">
            {/* Animated background */}
            <div
              className={`absolute h-[85%] w-[133px] bg-primaryColor border border-[#24352E] rounded-full transition-all duration-500 ease-in-out mx-2
              ${activeTab === 1 ? "left-0" : ""}
              ${activeTab === 2 ? "left-[108px]" : ""}
              ${activeTab === 3 ? "left-[268px]" : ""}
              ${activeTab === 4 ? "left-[410px]" : ""}
              ${activeTab === 5 ? "left-[550px]" : ""}
              ${activeTab === 6 ? "left-[670px]" : ""}
              `}
            ></div>

            {items.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.key === activeTab.toString()
                    ? "text-white"
                    : "text-white"
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
      </div>
    </div>
  );
}
