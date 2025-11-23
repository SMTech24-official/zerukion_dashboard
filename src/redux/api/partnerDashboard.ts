import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const DashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all user from admin dashboard
    getPargtnerStatics: build.query({
      query: () => ({
        url: `/partner-dashboard/statics`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),

    getPartnerRecentGames: build.query({
      query: () => ({
        url: `/partner-dashboard/recent-matches`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
  }),
});

export const { useGetPargtnerStaticsQuery, useGetPartnerRecentGamesQuery } =
  DashboardApi;
export default DashboardApi;
