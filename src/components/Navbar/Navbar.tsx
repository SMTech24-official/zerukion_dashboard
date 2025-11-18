"use client";

import profileImage from "@/assets/Avatar.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className={`flex items-center px-2 md:px-10 py-6 shadow-[8px_8px_72px_10px_rgba(21,14,73,0.08)]  bg-white z-[9] w-full`}
    >
      <div className="flex justify-between w-full">
        <div className="hidden lg:flex items-center gap-3">
          <h1 className="text-textColor text-2xl font-bold leading-normal">
            Overview
          </h1>
        </div>
        <div></div>

        <div className=" flex items-center gap-4">
         

          <Image
            src={profileImage}
            alt="Logo"
            className="h-16 w-16 rounded-full"
            priority
          />
          <div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_3016_1790)">
                  <path
                    d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                    stroke="#00A63E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.725 13.275L4.2 13.8M2.25 9H3H2.25ZM9 2.25V3V2.25ZM15 9H15.75H15ZM9 15V15.75V15ZM4.2 4.2L4.725 4.725L4.2 4.2ZM13.8 4.2L13.275 4.725L13.8 4.2ZM13.275 13.275L13.8 13.8L13.275 13.275Z"
                    stroke="#00A63E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3016_1790">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-primaryColor text-sm font-semibold leading-[150%] ">
                GOOD MORNING
              </p>
            </div>
            <h1 className="text-[#0C092A] text-2xl font-bold leading-[150%]">
              Madelyn Dias
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
