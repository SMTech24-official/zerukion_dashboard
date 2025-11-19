"use client";

import { handleApiResponse } from "@/lib/handleRTKResponse";
import {
  useCreateVenueMutation,
  useGetSingleVenueQuery,
  useGetSportsTypeQuery,
} from "@/redux/api/vanuesApi";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../ui/Input";
import { useEffect } from "react";

interface FormProps {
  venueName: string;
  address: string;
  sportsType: string;
  fieldSize: number;
  pricePerHour: number;
  locationLat: number;
  locationLng: number;
}
interface Props {
  vanueId?: string | null;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function AddVanue({ vanueId, setIsModalOpen }: Props) {
  const methods = useForm<FormProps>();
  const { handleSubmit, setValue } = methods;
  const { data: sportsList } = useGetSportsTypeQuery("");

  const { data: singleVanue } = useGetSingleVenueQuery(vanueId, {
    skip: !vanueId,
  });

  useEffect(() => {
    if (vanueId && singleVanue) {
      setValue("venueName", singleVanue?.data?.venueName);
      setValue("address", singleVanue?.data?.address);
      setValue("sportsType", singleVanue?.data?.sportsType);
      setValue("fieldSize", singleVanue?.data?.fieldSize);
      setValue("pricePerHour", singleVanue?.data?.pricePerHour);
    }
  }, [vanueId, singleVanue, setValue]);

  const [createVenuesFN, { isLoading }] = useCreateVenueMutation();
  const onSubmit = async (data: any) => {
    const venueInfo = {
      venueName: data.venueName,
      address: data.address,
      sportsType: data?.sportsType,
      locationLat: 23.8507,
      locationLng: 90.2543,
      fieldSize: data.fieldSize,
      pricePerHour: data.pricePerHour,
    };
    console.log(venueInfo, "valkjas dlfkjo");

    const res = await handleApiResponse(
      createVenuesFN,
      venueInfo,
      "Venue create successful!"
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
            {/* Players */}
            <div className="flex gap-5">
              <FormInput<FormProps>
                name="venueName"
                label="Venue Name"
                placeholder="Enter venue name"
                className="w-full"
              />
              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <label className="text-base font-normal text-textColor">
                    Sport Type
                  </label>
                  <select
                    {...methods.register("sportsType")}
                    className="mt-3 w-full py-3 bg-[#f3f3f5] rounded-lg px-3 outline-none"
                  >
                    <option value="">Select sport</option>
                    {sportsList?.data.map((type: any) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <FormInput<FormProps>
              name="address"
              type="text"
              label="Address"
              placeholder="00.0"
            />

            <div className="flex gap-5">
              <FormInput<FormProps>
                name="fieldSize"
                label="Field size"
                type="text"
                placeholder="e.g., 100m x 60m"
              />
              <FormInput<FormProps>
                name="pricePerHour"
                label="Price/Hour (€)"
                type="number"
                placeholder="00.0"
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                {isLoading ? "loading alskjf..." : "Create Game"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
