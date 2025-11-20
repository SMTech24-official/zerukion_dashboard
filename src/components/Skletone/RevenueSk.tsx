import React from "react";

export default function RevenueSk() {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="space-y-2 animate-pulse mb-4">
          <div className="flex items-center justify-between">
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
          </div>
          <div className="relative bg-gray-200 h-[15px] rounded-full w-full">
            <div className="absolute top-0 left-0 h-full bg-gray-300 rounded-full w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
