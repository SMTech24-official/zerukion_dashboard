import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const VanuesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all statistics for admin dashboard
    getAvailableVenues: build.query({
      query: ({ date }) => ({
        url: `/venues/available-venues`,
        method: "GET",
        params: { date },
      }),
      providesTags: ["vanues"],
    }),
    getVenuesList: build.query({
      query: () => ({
        url: `/venues/venue-dropdown`,
        method: "GET",
      }),
      providesTags: ["vanues"],
    }),
  }),
});

export const { useGetAvailableVenuesQuery, useGetVenuesListQuery } = VanuesApi;
export default VanuesApi;
