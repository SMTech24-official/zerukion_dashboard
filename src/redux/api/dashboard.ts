import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const DashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all user from admin dashboard
    getDashboardTotalInfo: build.query({
      query: () => ({
        url: `/admin-dashboard/dashboard-data`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
    getTopRevenue: build.query({
      query: () => ({
        url: `/admin-dashboard/dashboard-table-data`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
    getRecentGames: build.query({
      query: () => ({
        url: `/admin-dashboard/dashboard-bellow-table-data`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
  }),
});

export const {
  useGetDashboardTotalInfoQuery,
  useGetTopRevenueQuery,
  useGetRecentGamesQuery,
} = DashboardApi;
export default DashboardApi;
