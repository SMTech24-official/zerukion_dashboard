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
  }),
});

export const { useGetAvailableVenuesQuery } = VanuesApi;
export default VanuesApi;
