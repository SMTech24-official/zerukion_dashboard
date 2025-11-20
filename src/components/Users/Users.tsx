"use client";

import React, { useState } from "react";
import Search from "../ui/search";
import { MediaButton } from "../ui/icon";
import UsersTab from "./UsersTab";

export default function Users() {
  const [search, setSearch] = useState("");
  return (
    <div className="p-5 md:p-10 space-y-7">
      {/* header  */}

      <div className="flex justify-end gap-5 w-full">
        <Search value={search} onChange={setSearch} />
      </div>

      <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
        <div className="flex items-center gap-3">
          <MediaButton type="groupOfMan" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            All Users
          </h1>
        </div>
        <div>
          <UsersTab search={search} />
        </div>
      </div>
    </div>
  );
}
