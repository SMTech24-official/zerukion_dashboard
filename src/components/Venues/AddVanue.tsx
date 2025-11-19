"use client";

import { handleApiResponse } from "@/lib/handleRTKResponse";
import {
  useCreateVenueMutation,
  useGetSingleVenueQuery,
  useGetSportsTypeQuery,
  useUpdateVenueMutation,
} from "@/redux/api/vanuesApi";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../ui/Input";
import getLatLngFromAddress from "@/lib/getLatLngFromAddress";

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
  const [updateVenuesFN, { isLoading: isUpdating }] = useUpdateVenueMutation();

  const onSubmit = async (data: any) => {
    const { lat, lng } = await getLatLngFromAddress(data.address);
   

    const venueInfo = {
      venueName: data.venueName,
      address: data.address,
      sportsType: data?.sportsType,
      locationLat: lat,
      locationLng: lng,
      fieldSize: data.fieldSize,
      pricePerHour: data.pricePerHour,
    };
    if (vanueId) {
      const res = await handleApiResponse(
        updateVenuesFN,
        { data: venueInfo, id: vanueId },
        "Venue update successfully!"
      );
      if (res.success) {
        //reset form
        methods.reset();
        setIsModalOpen(false);
      }
    } else {
      const res = await handleApiResponse(
        createVenuesFN,
        venueInfo,
        "Venue created successfully!"
      );
      if (res.success) {
        //reset form
        methods.reset();
        setIsModalOpen(false);
      }
    }
  };

  return (
    <div>
      <div>
        <div className="mb-2">
          <h2 className="text-lg font-bold text-gray-900">
            {vanueId ? "Update" : "Create"} New Game
          </h2>
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
                {isLoading || isUpdating
                  ? "loading..."
                  : vanueId
                  ? "Update Venue"
                  : "Create Venue"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
