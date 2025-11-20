"use client";

import { handleApiResponse } from "@/lib/handleRTKResponse";
import { cn } from "@/lib/utils";
import {
  useGetAllSportsQuery,
  useUpdateSportStatusMutation,
} from "@/redux/api/sportsApi";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import TableSk from "../Skletone/TableSk";
import { MediaButton } from "../ui/icon";

export default function AllSports() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data: sports, isLoading, isError } = useGetAllSportsQuery("");
  const data = sports?.data;

  const [updateStatusFN, { isLoading: isUpdating }] =
    useUpdateSportStatusMutation();

  const handleToggle = async (id: string) => {
    setSelectedId(id);
    await handleApiResponse(updateStatusFN, id, "Games updated successfully!");
  };

  return (
    <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
      <div className="flex items-center gap-3">
        <MediaButton type="location" />
        <h1 className="text-textColor text-xl font-medium leading-[150%]">
          Top Venues by Revenue
        </h1>
      </div>
      {isError && (
        <div className="py-5 text-center text-red-500">
          Failed to load sports data. Please try again later.
        </div>
      )}

      {isLoading ? (
        <TableSk />
      ) : (
        <table className="min-w-full bg-white border border-borderColor rounded-xl overflow-hidden">
          <thead className="">
            <tr>
              <th className="text-left  px-2 xl:px-6  py-1 xl:py-3 text-sm font-normal leading-5 text-textColor">
                Sport
              </th>
              <th className="text-left  px-2 xl:px-6  py-1 xl:py-3 text-sm font-normal leading-5 text-textColor">
                Status
              </th>
              <th className="text-left px-2 xl:px-6  py-1 xl:py-3 text-sm font-normal leading-5 text-textColor">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item: any, index: number) => (
              <tr key={index} className="border-t">
                <td className="px-2 xl:px-6 py-1 xl:py-4 text-textColor leading-5">
                  {item.sportType}
                </td>
                <td
                  className={cn(
                    "px-2 xl:px-6 py-1 xl:py-4 text-textColord leading-5",
                    item.status ? "text-primaryColor" : "text-paragraphColor"
                  )}
                >
                  {item.status === true ? "Enabled" : "Disabled"}
                </td>
                <td className="px-2 xl:px-6 py-1 xl:py-4 text-textColor leading-5">
                  <div
                    className={`${
                      item?.status === true
                        ? "!bg-primaryColor"
                        : "bg-[#f0f0f0]"
                    } w-[50px] h-[25px] py-[0.100rem] dark:border-slate-700 dark:bg-slate-800 px-[0.200rem] cursor-pointer border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`}
                    onClick={() => handleToggle(item.id)}
                  >
                    {isUpdating && selectedId === item.id ? (
                      <CgSpinner className="animate-spin text-white     size-5" />
                    ) : (
                      <div
                        className={`${
                          item?.status === true
                            ? "translate-x-[24px] rotate-[90deg] !bg-white"
                            : "translate-x-[0px] rotate-[0deg]"
                        } w-[19px] h-[19px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`}
                        style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                      ></div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
