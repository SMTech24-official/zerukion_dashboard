"use client";

import { InfoIcon } from "lucide-react";
import type React from "react";

import { useMemo, useState } from "react";

export function BookingFeeManager() {
  const [feeType, setFeeType] = useState<"fixed" | "percentage">("fixed");
  const [fixedFee, setFixedFee] = useState(1.35);
  const [percentageFee, setPercentageFee] = useState(5);
  const [commissionRate, setCommissionRate] = useState(7.5);
  const [venuePrice, setVenuePrice] = useState(150);
  const [numPlayers, setNumPlayers] = useState(20);

  // Calculate fees
  const calculations = useMemo(() => {
    let bookingFeePerPlayer: number;
    let bookingFeeTotal: number;

    if (feeType === "fixed") {
      bookingFeePerPlayer = fixedFee;
      bookingFeeTotal = fixedFee * numPlayers;
    } else {
      bookingFeePerPlayer = (venuePrice * percentageFee) / 100 / numPlayers;
      bookingFeeTotal = venuePrice * (percentageFee / 100);
    }

    const commissionAmount = (venuePrice * commissionRate) / 100;
    const platformRevenue = bookingFeeTotal + commissionAmount;
    const partnerPayout = venuePrice - commissionAmount;

    return {
      bookingFeePerPlayer,
      bookingFeeTotal,
      commissionAmount,
      platformRevenue,
      partnerPayout,
    };
  }, [
    feeType,
    fixedFee,
    percentageFee,
    commissionRate,
    venuePrice,
    numPlayers,
  ]);

  const handleFixedFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFixedFee(Number(e.target.value));
  };

  const handlePercentageFeeChange = (type: any) => {
    setFeeType(type);
    setPercentageFee((prev) => (type === "percentage" ? prev : 5));
  };

  const handleCommissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommissionRate(Number(e.target.value));
  };

  return (
    <div className="space-y-8 ">
      {/* Header */}

      {/* Fee Type Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="">
          <div className="text-left">
            <h2 className="text-base font-semibold text-gray-900">
              € Player Booking Fee
            </h2>
            <p className="text-sm text-gray-600">
              Choose between fixed amount or percentage
            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
            <div className="text-left">
              <h2 className="text-base font-semibold text-gray-900">
                Fee Type
              </h2>
              <p className="text-sm text-gray-600">
                Choose between fixed amount or percentage
              </p>
            </div>
            <div className="flex items-center gap-5">
              <button
                onClick={() => handlePercentageFeeChange("fixed")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  feeType === "fixed"
                    ? "bg-primaryColor text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Fixed (€)
              </button>
              <button
                onClick={() => handlePercentageFeeChange("percentage")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  feeType === "percentage"
                    ? "bg-primaryColor text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Percentage (%)
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <label className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">
                Fixed Fee per Player
              </span>
            </label>
            <div className="flex items-center gap-2">
              {feeType === "percentage" ? (
                <span className="text-lg font-bold text-green-600">
                  {percentageFee}%
                </span>
              ) : (
                <span className="text-lg font-bold text-green-600">
                  €{fixedFee.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Fixed Fee Slider */}
          {feeType === "percentage" && (
            <div className="">
              <input
                type="range"
                min="0"
                max="20"
                step="0.5"
                value={percentageFee}
                onChange={(e) => setPercentageFee(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                style={{
                  background: `linear-gradient(to right, #16a34a 0%, #16a34a ${
                    (percentageFee / 20) * 100
                  }%, #e5e7eb ${(percentageFee / 20) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <p className="text-xs text-gray-500 text-left">
                Current: {percentageFee}% of venue price
              </p>
            </div>
          )}
          {feeType === "fixed" && (
            <div className="">
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.05"
                value={fixedFee}
                onChange={handleFixedFeeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                style={{
                  background: `linear-gradient(to right, #16a34a 0%, #16a34a ${
                    ((fixedFee - 0.1) / 9.9) * 100
                  }%, #e5e7eb ${
                    ((fixedFee - 0.1) / 9.9) * 100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <p className="text-xs text-left text-gray-500">
                Recommended range: €0.25 - €1.50 per player
              </p>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-2 mt-2">
            <InfoIcon />
            <p className="text-xs text-blue-700">
              Changes to booking fees will apply to all new bookings. Existing
              bookings will retain their original fee structure.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Commission Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="space-y-4">
          <div className="text-left">
            <h2 className="text-base font-semibold text-gray-900">
              % Partner Commission
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between ">
                <label className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    Default Commission Rate
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-green-600">
                    {commissionRate.toFixed(1)}%
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="20"
                step="0.5"
                value={commissionRate}
                onChange={handleCommissionChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                style={{
                  background: `linear-gradient(to right, #16a34a 0%, #16a34a ${
                    (commissionRate / 20) * 100
                  }%, #e5e7eb ${(commissionRate / 20) * 100}%, #e5e7eb 100%)`,
                }}
              />

              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">
                  Standard commission rate applied to all new partners
                </span>
              </div>
            </div>
          </div>

          {/* Special Commission Tiers */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 text-left mb-3">
              Special Commission Tiers
            </h3>
            <div className="space-y-2 bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start md:items-center">
                <div>
                  <div className="flex items-start md:items-center gap-1 text-left">
                    <p className="text-sm font-medium text-gray-700">
                      Founder Partners
                    </p>
                    <p className="text-xs text-gray-500">(Early adopters)</p>
                  </div>
                  <p className="text-xs text-gray-500 text-left">
                    Partners marked as founders receive special rates
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-600">0%</span>
              </div>
            </div>
          </div>

          {/* Custom Rates */}
          <div className="">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2 bg-gray-50 rounded-lg p-4">
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">
                  Custom Rates
                </p>
                <p className="text-xs text-gray-500">
                  Individual rates can be set per partner
                </p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Manage Partners
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-2 mt-4">
            <InfoIcon />
            <p className="text-xs text-blue-700">
              Commission is calculated on the venue booking amount and deducted
              before partner payout
            </p>
          </div>
        </div>
      </div>

      {/* Fee Breakdown Example */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-sm text-left font-semibold text-gray-900 mb-6">
          Fee Breakdown Example
        </h2>

        <div className="space-y-4 mb-8">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-left font-medium text-gray-700 block mb-2">
                Venue Price (per hour)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  €
                </span>
                <input
                  type="number"
                  value={venuePrice}
                  onChange={(e) => setVenuePrice(Number(e.target.value))}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-left font-medium text-gray-700 block mb-2">
                Number of Players
              </label>
              <input
                type="number"
                value={numPlayers}
                onChange={(e) => setNumPlayers(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Breakdown Results */}
          <div className="border-t border-gray-200 pt-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Venue Price (per hour)
              </span>
              <span className="font-semibold text-gray-900">
                €{venuePrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Number of Players</span>
              <span className="font-semibold text-gray-900">{numPlayers}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Player Contribution</span>
              <span className="font-semibold text-gray-900">
                €{(venuePrice / numPlayers).toFixed(2)} each
              </span>
            </div>

            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  Booking Fee (
                  {feeType === "fixed"
                    ? "€" + fixedFee.toFixed(2)
                    : percentageFee + "%"}
                  )
                </span>
                <span className="font-semibold text-green-600">
                  +€{calculations.bookingFeeTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  Commission ({commissionRate.toFixed(1)}%)
                </span>
                <span className="font-semibold text-blue-600">
                  +€{calculations.commissionAmount.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-900">
                    Platform Revenue
                  </span>
                  <span className="font-bold text-green-600">
                    €{calculations.platformRevenue.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-900">
                    Partner Payout
                  </span>
                  <span className="font-bold text-blue-600">
                    €{calculations.partnerPayout.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );
}
