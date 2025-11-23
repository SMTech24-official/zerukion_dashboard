"use client";
import logo from "@/assets/Logo.svg";
import sidebarBg from "@/assets/Sidebar.png";
import LogoutModal from "@/components/ui/logoutModal";
import Modal from "@/components/ui/modal";
import { navigation } from "@/constants/Navigation";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavbarSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const path = usePathname();
  const userRole = Cookies.get("role");

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Hamburger (mobile only) */}
      <div
        className={cn(
          "absolute lg:hidden top-5 left-5 p-3 flex items-center justify-between bg-primaryColor rounded-xl shadow-xl z-[9999]",
          isOpen && "hidden"
        )}
      >
        <button onClick={toggleSidebar}>
          <Menu className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Sidebar Desktop */}
      <div
        style={{ backgroundImage: `url(${sidebarBg.src})` }}
        className="hidden lg:flex  w-[220px] xl:w-[320px] h-screen border-r px-6 overflow-y-auto shrink-0"
      >
        <SidebarContent
          isOpen={true}
          path={path}
          userRole={userRole}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>

      {/* Sidebar Mobile (Drawer) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={toggleSidebar}
          ></div>

          {/* Drawer */}
          <div
            style={{ backgroundImage: `url(${sidebarBg.src})` }}
            className="relative z-50 w-[290px] h-full shadow-lg px-6 overflow-y-auto"
          >
            <div className="flex justify-end items-end py-3">
              <button onClick={toggleSidebar}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <SidebarContent
              isOpen={true}
              path={path}
              userRole={userRole}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

/* ---------------- Shared Sidebar Content ---------------- */

const SidebarContent = ({
  isOpen,
  path,
  userRole,
  isModalOpen,
  setIsModalOpen,
}: {
  isOpen: boolean;
  path: string;
  userRole: string | undefined;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}) => (
  <aside className="flex flex-col font-inter py-10 w-full h-full">
    {/* Logo */}
    <div className="h-28 w-28 mx-auto mb-12">
      <Image src={logo} alt="Logo" width={200} height={200} />
    </div>

    {/* Nav Items */}
    <ul className="ml-1">
      {navigation
        ?.filter((item) => item.role.includes(userRole || ""))
        ?.map((item, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-md transition-colors ${
                path === item.route && item.role.includes(userRole || "")
                  ? "bg-primaryColor text-white"
                  : "text-white hover:bg-primaryColor hover:text-white"
              }`}
            >
              <span className="text-xl">
                {path === item.route ? item.whiteIcon : item.iconPath}
              </span>
              {isOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          </li>
        ))}
    </ul>

    {/* Logout */}
    <div className="p-4 mt-auto">
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 w-full text-red-600 bg-red-100 px-4 py-3 rounded-lg text-sm font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
        >
          <path
            d="M8.333 2.5 4.254 4.54A1.5 1.5 0 0 0 3.333 6.03v7.94a1.5 1.5 0 0 0 .921 1.39L8.333 17.5"
            stroke="#D00E11"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.583 7.917 16.667 10l-2.084 2.083M8.333 10h7.826"
            stroke="#D00E11"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {isOpen && <span>Log out</span>}
      </button>
    </div>

    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      // className="bg-white max-w-lg"
    >
      <LogoutModal setIsModalOpen={setIsModalOpen} />
    </Modal>
  </aside>
);

export default NavbarSlider;
