import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const PatnersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all statistics for admin dashboard
    getAllStatistics: build.query({
      query: () => ({
        url: `/partner-requests/partner-statistics`,
        method: "GET",
      }),
      providesTags: ["partners"],
    }),
    //get all partners
    getAllParners: build.query({
      query: ({ status }) => ({
        url: `/partner-requests/all-partner-requests`,
        method: "GET",
        params: { status },
      }),
      providesTags: ["partners"],
    }),
  }),
});

export const { useGetAllStatisticsQuery, useGetAllParnersQuery } = PatnersApi;
export default PatnersApi;
