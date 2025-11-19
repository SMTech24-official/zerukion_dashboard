"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { MediaButton } from "../ui/icon";
import Search from "../ui/search";
import GamesTab from "./GamesTab";
import Modal from "../ui/modal";
import CreateGameByvanue from "../Calendar/CreateGameByvanue";

export default function Games() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <div className="p-5 md:p-10 space-y-7">
      {/* header  */}

      <div className="flex justify-end gap-5 w-full">
        <Search value={search} onChange={setSearch} />
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="default"
          className="w-48"
        >
          Create Game
        </Button>
      </div>

      <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
        <div className="flex items-center gap-3">
          <MediaButton type="games" />
          <h1 className="text-textColor text-xl font-medium leading-[150%]">
            All Games
          </h1>
        </div>
        <div>
          <GamesTab search={search} />
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <CreateGameByvanue setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}
