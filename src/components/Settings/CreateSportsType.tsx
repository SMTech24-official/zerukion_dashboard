// FULL FIXED CODE FOR CreateGameByVenue

"use client";

import { handleApiResponse } from "@/lib/handleRTKResponse";
import { useCreateSportStatusMutation } from "@/redux/api/sportsApi";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../ui/Input";

interface FormProps {
  sportType: string;
}

interface Props {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function CreateSportsType({ setIsModalOpen }: Props) {
  const methods = useForm<FormProps>();
  const { handleSubmit } = methods;

  const [createSportsFN, { isLoading }] = useCreateSportStatusMutation();
  const onSubmit = async (data: any) => {
    const sportsInfo = {
      sportType: data.sportType,
    };

    const res = await handleApiResponse(
      createSportsFN,
      sportsInfo,
      "Sports type creation successful!"
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
          <h2 className="text-lg font-bold text-gray-900">Create New Sports</h2>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <FormInput
              name="sportType"
              label="Sport Type"
              placeholder="Enter sport type"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              {isLoading ? "Loading..." : "Create Sports Type"}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
