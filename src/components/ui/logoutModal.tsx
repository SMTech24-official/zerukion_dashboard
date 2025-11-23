import React from "react";
import { MediaButton } from "./icon";
import { Button } from "./button";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Props {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function LogoutModal({ setIsModalOpen }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(logout());
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/auth/login");
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <MediaButton type="logout" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-medium leading-[120%] text-textColor">
          Ready to Log Out?
        </h1>
        <p className="text-[#3F3F3F] text-sm font-normal leading-[140%] mt-2">
          You’ve been log out safely. See you again soon!
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 mt-9">
        <Button
          onClick={() => setIsModalOpen(false)}
          variant="outline"
          className="w-36"
        >
          close
        </Button>
        <Button onClick={handleLogOut} variant="default" className="w-36">
          Log out
        </Button>
      </div>
    </div>
  );
}
