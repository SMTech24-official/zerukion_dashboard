import React from "react";
import { MediaButton } from "../ui/icon";

export default function TopVenuesRevenue({ data }: any) {
  return (
    <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
      <div className="flex items-center gap-3">
        <MediaButton type="location" />
        <h1 className="text-textColor text-xl font-medium leading-[150%]">
          Top Venues by Revenue
        </h1>
      </div>
      <table className="min-w-full bg-white border border-borderColor rounded-xl overflow-hidden">
        <thead className="">
          <tr>
            <th className="text-left  px-2 xl:px-6  py-1 xl:py-3 text-sm font-normal leading-5 text-textColor">
              Venue
            </th>
            <th className="text-left  px-2 xl:px-6  py-1 xl:py-3 text-sm font-normal leading-5 text-textColor">
              Games
            </th>
            <th className="text-left px-2 xl:px-6  py-1 xl:py-3 text-sm font-normal leading-5 text-textColor">
              Revenue
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item: any) => (
            <tr key={item.id} className="border-t">
              <td className="px-2 xl:px-6 py-1 xl:py-4 text-textColor leading-5">
                {item.venueName}
              </td>
              <td className="px-2 xl:px-6 py-1 xl:py-4 text-textColord leading-5">
                {item.totalGames}
              </td>
              <td className="px-2 xl:px-6 py-1 xl:py-4 text-textColor leading-5">
                £{item.totalRevenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
