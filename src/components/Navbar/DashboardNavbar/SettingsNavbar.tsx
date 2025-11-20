"use client";

import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import React from "react";
import { usePathname } from "next/navigation";

export default function SettingsNavbar() {
  const path = usePathname();

  const navigation = [
    {
      label: "Basic",
      route: "/settings/basic",
    },
    {
      label: "Account",
      route: "/settings/accounts",
    },
    {
      label: "Notificaitions",
      route: "/settings/notification",
    },
  ];
  return (
    <div className="bg-[#f6f8fb]">
      <div className="p-6">
        <div className="bg-white h-96 w-full md:w-80 p-6">
          <ul className="ml-1">
            {navigation?.map((item, index: number) => (
              <li key={index}>
                <Link
                  href={item.route}
                  className={`flex items-center justify-between gap-3 px-4 py-4 text-lg mb-2 rounded-md transition-colors ${
                    path === item.route
                      ? "bg-primaryColor text-white"
                      : "text-[#30373D]  hover:bg-primaryColor hover:text-white"
                  }`}
                >
                  <span className="text-sm">{item.label}</span>
                  <span className="text-xl">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
