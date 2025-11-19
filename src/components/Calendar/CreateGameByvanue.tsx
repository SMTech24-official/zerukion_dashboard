// FULL FIXED CODE FOR CreateGameByVenue

"use client";

import { skillType } from "@/constants/DropdownInfo";
import { handleApiResponse } from "@/lib/handleRTKResponse";
import {
  useCreateGamesMutation,
  useGetSingelGamesQuery,
} from "@/redux/api/gamesApi";
import {
  useGetSingleVenueQuery,
  useGetVenuesListQuery,
} from "@/redux/api/vanuesApi";
import { DatePicker, Space } from "antd";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../ui/Input";
import UploadMedia from "../ui/UploadMedia";
import dayjs from "dayjs";

interface FormProps {
  title: string;
  minPlayers: string;
  maxPlayers: string;
  skillLevel: string;
  duration: string;
  pricePerHour: string;
  bookingFeePerPlayer: string;
  venue: string;
  sportsType: string;
  date: any;
  startTime: any;
  location: string;
  locationLat: number;
  locationLng: number;
  bannerImage: File[];
}

interface Props {
  vanueId?: string | null;
  setIsModalOpen: (isOpen: boolean) => void;
  gameId?: string | null;
}

export default function CreateGameByvanue({
  vanueId,
  setIsModalOpen,
  gameId,
}: Props) {
  const methods = useForm<FormProps>();
  const { handleSubmit, setValue, watch } = methods;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const { data: singleVanue } = useGetSingleVenueQuery(vanueId, {
    skip: !vanueId,
  });
  const { data: singleGame } = useGetSingelGamesQuery(gameId, {
    skip: !gameId,
  });
  console.log(singleGame);
  const { data: vanuesList } = useGetVenuesListQuery("");

  useEffect(() => {
    if (singleVanue?.data && vanueId) {
      const v = singleVanue.data;
      setSelected(v);

      setValue("venue", v.id);
      setValue("sportsType", v.sportsType);
      setValue("location", v.address);
      setValue("locationLat", v.locationLat);
      setValue("locationLng", v.locationLng);
      setValue("pricePerHour", v.pricePerHour?.toString() || "0");
    }

    if (singleGame?.data && gameId) {
      const g = singleGame.data;
      setSelected({ venueName: g.title });

      setValue("title", g.title);
      setValue("venue", g.venueId);
      setValue("sportsType", g.sportsType);
      setValue("location", g.location);
      setValue("locationLat", g.locationLat);
      setValue("locationLng", g.locationLng);
      setValue("pricePerHour", g.price?.toString() || "0");

      setValue("date", dayjs(g.date));
      setValue("startTime", dayjs(g.time));

      setValue("duration", g.playingDuration.toString());
      setValue("minPlayers", g.minimumPlayers.toString());
      setValue("maxPlayers", g.maximumPlayers.toString());
      setValue("skillLevel", g.skillLevel);
      setValue("bookingFeePerPlayer", g.bookingFeePerPlayer?.toString() || "0");
    }
  }, [singleVanue, singleGame, setValue, vanueId, gameId]);

  const handleSelectVenue = (venue: any) => {
    setSelected(venue);
    setValue("venue", venue.id);
    setValue("sportsType", venue.sportsType);
    setValue("location", venue.address);
    setValue("locationLat", venue.locationLat);
    setValue("locationLng", venue.locationLng);
    setValue("pricePerHour", venue.pricePerHour?.toString() || "0");
    setOpen(false);
  };

  const [createGameFN, { isLoading }] = useCreateGamesMutation();

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    const gameInfo = {
      venueId: vanueId ? vanueId : data.venue,
      title: data.title,
      sportsType: data.sportsType,
      price: data.pricePerHour,
      skillLevel: data.skillLevel,
      location: data.location,
      locationLat: data.locationLat,
      locationLng: data.locationLng,
      time: data.startTime,
      date: data.date,
      playingDuration: data.duration,
      minimumPlayers: data.minPlayers,
      maximumPlayers: data.maxPlayers,
    };

    if (data.bannerImage) {
      data.bannerImage.forEach((file: any) => {
        formData.append("bannerImage", file);
      });
    }

    formData.append("bodyData", JSON.stringify(gameInfo));

    const res = await handleApiResponse(
      createGameFN,
      formData,
      "Game create successful!"
    );
    if (res.success) {
      methods.reset();
      setIsModalOpen(false);
    }
  };

  return (
    <div className="text-start">
      <div>
        <div className="mb-2">
          <h2 className="text-lg font-bold text-gray-900">Create New Game</h2>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <UploadMedia name="bannerImage" label="Image" />

            <FormInput
              name="title"
              label="Title of the Game"
              placeholder="Enter title"
            />

            {/* Venue Selector */}
            <div className="flex gap-5">
              <div className="w-full relative">
                <label className="text-base font-normal text-textColor">
                  Venue
                </label>
                <div
                  className="mt-2 w-full bg-[#f3f3f5] rounded-lg px-3 py-3 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  {selected ? (
                    <p className="font-medium">{selected.venueName}</p>
                  ) : (
                    <p className="text-gray-500">Select venue</p>
                  )}
                </div>

                {open && (
                  <div className="absolute z-20 mt-1 bg-white shadow-lg rounded-lg p-2 max-h-80 w-full overflow-y-auto">
                    {vanuesList?.data.map((venue: any) => (
                      <div
                        key={venue.id}
                        className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                        onClick={() => handleSelectVenue(venue)}
                      >
                        <p className="font-medium">{venue.venueName}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{venue.sportsType}</span>
                          <span>€{venue.price || 0}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Date & Time */}
            <div className="w-full">
              <label className="text-base font-normal text-textColor">
                Date and Time
              </label>
              <Space direction="vertical" size={12} className="w-full">
                <DatePicker
                  showTime
                  value={watch("startTime") ? dayjs(watch("startTime")) : null}
                  onChange={(value) => {
                    if (value) {
                      setValue("date", value.startOf("day").toISOString());
                      setValue("startTime", value.toISOString());
                    }
                  }}
                  className="mt-2 w-full py-[10px] bg-[#f3f3f5] rounded-lg px-3"
                />
              </Space>
            </div>

            {/* Players */}
            <div className="flex gap-5">
              <FormInput
                name="minPlayers"
                type="number"
                label="Minimum Players"
              />
              <FormInput
                name="maxPlayers"
                type="number"
                label="Maximum Players"
              />
            </div>

            {/* Skill Level */}
            <div className="flex gap-5">
              <div className="w-full">
                <label className="text-base font-normal text-textColor">
                  Skill Level
                </label>
                <select
                  {...methods.register("skillLevel")}
                  className="mt-3 w-full py-3 bg-[#f3f3f5] rounded-lg px-3 outline-none"
                >
                  <option value="">Select skill level</option>
                  {skillType.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <FormInput
                name="duration"
                type="number"
                label="Playing Duration (hour)"
              />
            </div>

            <FormInput
              name="bookingFeePerPlayer"
              type="number"
              label="Booking Fee per Player (€)"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              {isLoading ? "Loading..." : "Create Game"}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
