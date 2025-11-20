"use client";

import { useState } from "react";
import PaymentTransactionsTab from "./PaymentTransactionsTab";
import { BookingFeeManager } from "./BookingFeeManager";

export default function PaymentTab() {
  const [activeTab, setActiveTab] = useState(1);

  const items = [
    {
      key: "1",
      label: "Payment Transactions",
      children: <PaymentTransactionsTab />,
    },
    {
      key: "2",
      label: "Payment Settings",
      children: <BookingFeeManager />,
    },
  ];

  return (
    <>
      <div className="py-5 overflow-x-auto">
        {/* Tabs */}
        <ul className="flex items-center w-full md:max-w-[480px]  relative bg-[#0e2f1e] dark:bg-slate-800 rounded-full p-3">
          {/* Animated background */}
          <div
            className={`absolute h-[85%] w-[233px] bg-primaryColor border border-[#24352E] rounded-full transition-all duration-500 ease-in-out mx-2
              ${activeTab === 1 ? "left-0" : ""}
              ${activeTab === 2 ? "left-[230px]" : ""}
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
      <div className="text-center overflow-auto shadow-custom">
        {items.find((item) => item.key === activeTab.toString())?.children}
      </div>
    </>
  );
}
