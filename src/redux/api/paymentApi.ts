import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const PaymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all user from admin dashboard
    getAllPayments: build.query({
      query: ({ filter }) => ({
        url: `/payments`,
        method: "GET",
        params: { filter },
      }),
      providesTags: ["payments"],
    }),
    //get all user from admin dashboard
    getPaymentStatics: build.query({
      query: () => ({
        url: `/payments/payment-statics`,
        method: "GET",
      }),
      providesTags: ["payments"],
    }),
  }),
});

export const { useGetAllPaymentsQuery, useGetPaymentStaticsQuery } = PaymentApi;
export default PaymentApi;
