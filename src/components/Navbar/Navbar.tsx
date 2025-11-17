"use client";

import Image from "next/image";
import logo from "@/assets/icon/arrow.svg";
import profileImage from "@/assets/team1.jpg";
import message from "@/assets/icon/message.svg";
import notification from "@/assets/icon/notification.svg";

export default function Navbar() {
  return (
    <nav className={` h-24 flex px-2 md:px-10  bg-white z-[9] w-full`}>
      <div className="flex justify-between w-full">
        <div className="hidden md:flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo"
            className="object-contain h-full"
            priority
          />
          <h1 className="text-textColor text-2xl font-bold leading-normal">
            Overview
          </h1>
        </div>
        <div></div>

        <div className=" flex items-center gap-8">
          <div className="hidden md:flex items-center gap-1 mt-4">
            <Image
              src={message}
              alt="Logo"
              height={200}
              width={200}
              className="h-20 w-20"
            />

            <Image
              src={notification}
              alt="Logo"
              height={200}
              width={200}
              className="h-20 w-20"
            />
          </div>

          <Image
            src={profileImage}
            alt="Logo"
            className="h-16 w-16 rounded-full"
            priority
          />
        </div>
      </div>
    </nav>
  );
}
