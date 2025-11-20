"use client";

import React from "react";
import OverviewCard from "../ui/OverviewCard";
import PaymentTab from "./PaymentTab";
import { useGetPaymentStaticsQuery } from "@/redux/api/paymentApi";

export default function Payment() {
  const { data, isLoading, isError } = useGetPaymentStaticsQuery("");

  return (
    <div className="p-5 md:p-10 space-y-7">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
        <OverviewCard
          title="Total Revenue"
          amount={data?.data?.totalRevenueAmounts || 0}
          icon="applicaton"
          percentage="Awaiting review"
          isError={isError}
          isLoading={isLoading}
        />
        <OverviewCard
          title="Completed"
          amount={data?.data?.totalCompletedAmounts || 0}
          icon="complete"
          percentage="Approved venues"
          isError={isError}
          isLoading={isLoading}
        />
        <OverviewCard
          title="Pending"
          amount={data?.data?.totalPendingAmounts || 0}
          icon="pending"
          percentage="Total generated"
          isError={isError}
          isLoading={isLoading}
        />
      </div>
      <PaymentTab />
    </div>
  );
}
