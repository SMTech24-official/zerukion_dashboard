// FULL FIXED CODE FOR CreateGameByVenue

"use client";

import { handleApiResponse } from "@/lib/handleRTKResponse";
import { useGetAllGamesQuery } from "@/redux/api/gamesApi";
import { useCreateNotificationMutation } from "@/redux/api/notificationApi";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../ui/Input";

interface FormProps {
  notificationBody: string;
  notificationTitle: string;
  matchId: string;
}

interface Props {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function CreateNotification({ setIsModalOpen }: Props) {
  const methods = useForm<FormProps>();
  const { handleSubmit } = methods;

  const [createNotificationFN, { isLoading }] = useCreateNotificationMutation();
  const onSubmit = async (data: any) => {
    const dataToSend = {
      matchId: data?.matchId,
      notificationTitle: data?.notificationTitle,
      notificationBody: data?.notificationBody,
    };
    const res = await handleApiResponse(
      createNotificationFN,
      dataToSend,
      "Notification sent successfully!"
    );
    if (res.success) {
      methods.reset();
      setIsModalOpen(false);
    }
  };

  const { data } = useGetAllGamesQuery({ status: "All" });
  const match = data?.data?.data;
  return (
    <div className="text-start">
      <div>
        <div className="mb-2">
          <h2 className="text-lg font-bold text-gray-900">
            Send Manual Notification
          </h2>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <FormInput
              name="notificationTitle"
              label="Notification Title"
              placeholder="Enter notification title"
            />
            <div className="flex gap-5 w-full">
              <div className="w-full">
                <label className="text-base font-normal text-textColor">
                  Sport Type
                </label>
                <select
                  {...methods.register("matchId")}
                  className="mt-3 w-full py-3 bg-[#f3f3f5] rounded-lg px-3 outline-none"
                >
                  <option value="">Select sport</option>
                  {match?.map((type: any, index: number) => (
                    <option key={index} value={type?.id}>
                      {type?.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              rows={5}
              {...methods.register("notificationBody")}
              placeholder="Enter your notification message"
              className="w-full text-[#747474] bg-[#f3f3f5] text-base font-medium outline-none p-3 rounded-lg"
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
