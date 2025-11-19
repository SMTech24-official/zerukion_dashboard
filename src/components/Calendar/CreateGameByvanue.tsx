"use client";

import { skillType } from "@/constants/DropdownInfo";
import { handleApiResponse } from "@/lib/handleRTKResponse";
import { useCreateGamesMutation } from "@/redux/api/gamesApi";
import {
  useGetSingleVenueQuery,
  useGetVenuesListQuery,
} from "@/redux/api/vanuesApi";
import { DatePicker, Space } from "antd";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../ui/Input";
import UploadMedia from "../ui/UploadMedia";

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
  date: string;
  startTime: string;
  location: string;
  locationLat: number;
  locationLng: number;
}
interface Props {
  vanueId?: string | null;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function CreateGameByvanue({ vanueId, setIsModalOpen }: Props) {
  const methods = useForm<FormProps>();
  const { handleSubmit, setValue } = methods;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const { data: singleVanue } = useGetSingleVenueQuery(vanueId, {
    skip: !vanueId,
  });
  const { data: vanuesList } = useGetVenuesListQuery("");

  useEffect(() => {
    if (singleVanue?.data) {
      setSelected(singleVanue?.data);
      setValue("venue", singleVanue?.data.id);
      setValue("sportsType", singleVanue?.data.sportsType);
      setValue("location", singleVanue?.data.address);
      setValue("locationLat", singleVanue?.data.locationLat);
      setValue("locationLng", singleVanue?.data.locationLng);
      setValue(
        "pricePerHour",
        singleVanue?.data.pricePerHour
          ? singleVanue?.data.pricePerHour.toString()
          : "0"
      );
    }
  }, [singleVanue, setValue]);

  const handleSelect = (venue: any) => {
    setSelected(venue);
    setValue("venue", venue.id);
    setValue("sportsType", venue.sportsType);
    setValue("location", venue.address);
    setValue("locationLat", venue.locationLat);
    setValue("locationLng", venue.locationLng);
    setValue("pricePerHour", venue.pricePerHour || "0");
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
    data.bannerImage.forEach((file: any) => {
      formData.append("bannerImage", file);
    });
    formData.append("bodyData", JSON.stringify(gameInfo));
    const res = await handleApiResponse(
      createGameFN,
      formData,
      "Game create successful!"
    );
    if (res.success) {
      //reset form
      methods.reset();
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <div>
        <div className="mb-2">
          <h2 className="text-lg font-bold text-gray-900">Create New Game</h2>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <UploadMedia name="bannerImage" label="Image" />

            <FormInput<FormProps>
              name="title"
              label="Title of the Game"
              placeholder="Enter title of the game"
            />

            {/* Venue selector */}
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
                    <div>
                      <p className="font-medium">{selected.venueName}</p>
                    </div>
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
                        onClick={() => handleSelect(venue)}
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

            {/* Date + Time */}
            <div className="flex gap-5">
              <div className="w-full">
                <label className="text-base font-normal text-textColor">
                  Date and Time
                </label>
                <Space direction="vertical" size={12} className="w-full">
                  <DatePicker
                    showTime
                    onChange={(value) => {
                      if (value) {
                        // Date at 00:00:00
                        const isoDateWithGMT = value
                          .clone()
                          .startOf("day")
                          .format(); // ISO string with GMT offset
                        const isoTimeWithGMT = value.clone().format(); // Full ISO with time and GMT

                        setValue("date", isoDateWithGMT);
                        setValue("startTime", isoTimeWithGMT);
                      }
                    }}
                    className="mt-2 w-full py-[10px] bg-[#f3f3f5] rounded-lg px-3"
                  />
                </Space>
              </div>
            </div>

            {/* Players */}
            <div className="flex gap-5">
              <FormInput<FormProps>
                name="minPlayers"
                label="Minimum Players"
                type="number"
                placeholder="Enter minimum players"
              />
              <FormInput<FormProps>
                name="maxPlayers"
                label="Maximum Players"
                type="number"
                placeholder="Enter maximum players"
              />
            </div>

            <div className="flex gap-5">
              <div className="w-full">
                <label className="text-base font-normal text-textColor">
                  Skill Level
                </label>
                <select
                  className="mt-3 w-full py-3 bg-[#f3f3f5] rounded-lg px-3 outline-none"
                  onChange={(e) => setValue("skillLevel", e.target.value)}
                >
                  <option value="">Select venue</option>
                  {skillType.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <FormInput<FormProps>
                name="duration"
                type="number"
                label="Playing Duration Time (hour)"
                placeholder="Enter playing duration time"
              />
            </div>

            <FormInput<FormProps>
              name="bookingFeePerPlayer"
              type="number"
              label="Booking Fee per Player (€)"
              placeholder="00.0"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              {isLoading ? "loading alskjf..." : "Create Game"}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
