import React from "react";

export default function VenueCardSk() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 w-full bg-white shadow-sm animate-pulse h-56"
        >
          {/* Top row: venue name + status */}
          <div className="flex items-center justify-between mb-2">
            <div className="h-4 bg-gray-300 rounded w-3/5"></div>
            <div className="h-4 w-20 bg-gray-300 rounded-full"></div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 mt-2">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
          </div>

          {/* Sport */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>

            {/* Field size */}
            <div className="flex items-center justify-between mt-3">
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>

            {/* Price/hr */}
            <div className="flex items-center justify-between mt-3">
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
