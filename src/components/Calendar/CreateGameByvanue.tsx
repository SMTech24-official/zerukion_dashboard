"use client";

import { FormProvider, useForm } from "react-hook-form";
import UploadMedia from "../ui/UploadMedia";
import { FormInput } from "../ui/Input";

interface FormProps {
  minPlayers: string;
  maxPlayers: string;
  skillLevel: string;
  duration: string;
}

export default function CreateGameByvanue({ vanueId }: any) {
  const methods = useForm<FormProps>({});
  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <>
      {/* Modal */}
      <div className="">
        <div className="">
          {/* Header with close button */}
          <div className="mb-2 ">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Create New Game
              </h2>
            </div>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Spa Name and Price */}
              <UploadMedia name="profileImage" label="Image" />
              {/* details  */}
              <div className="bg-[#ececf0] rounded-2xl p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  title of the game
                </h3>

                {/* Venue and Sport Info - 2 columns */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="">
                    <p className="text-xs text-gray-600 font-medium">Venue</p>
                    <p className="text-sm text-gray-900 font-medium mt-1">
                      test
                    </p>
                  </div>
                  <div className="">
                    <p className="text-xs text-gray-600 font-medium">Sport</p>
                    <p className="text-sm text-gray-900 font-medium mt-1">
                      test
                    </p>
                  </div>
                </div>

                {/* Date and Time - 2 columns */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <p className="text-xs text-gray-600 font-medium">Date</p>
                    <p className="text-sm text-gray-900 font-medium mt-1">
                      date
                    </p>
                  </div>
                  <div className="">
                    <p className="text-xs text-gray-600 font-medium">Time</p>
                    <p className="text-sm text-gray-900 font-medium mt-1">
                      time
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FormInput<FormProps>
                  name="minPlayers"
                  label="Minimum Players"
                  placeholder="Enter minimum players"
                  className=""
                />
                <FormInput<FormProps>
                  name="maxPlayers"
                  label="Maximum Players"
                  placeholder="Enter maximum players"
                  className=""
                />
              </div>
            </form>
          </FormProvider>

          {/* Footer with Buttons */}
          <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3 bg-gray-50">
            <button className="px-6 py-2 text-gray-700 font-medium border border-gray-300 rounded hover:bg-gray-100 transition-colors text-sm">
              Cancel
            </button>
            <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors text-sm">
              Create Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
