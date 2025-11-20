import React from "react";

export default function OverviewCardSk() {
  return (
    <div className="bg-white rounded-2xl border border-borderColor p-6 shadow-custom flex justify-between w-full animate-pulse">
      <div className="flex-1 space-y-3">
        {/* Title Skeleton */}
        <div className="h-5 w-3/4 bg-gray-200 rounded"></div>

        {/* Amount Skeleton */}
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

        {/* Percentage Skeleton */}
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
      </div>

      {/* Icon Skeleton */}
      <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
    </div>
  );
}
