import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const VanuesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all available venues by date
    getAvailableVenues: build.query({
      query: ({ date }) => ({
        url: `/venues/available-venues`,
        method: "GET",
        params: { date },
      }),
      providesTags: ["vanues"],
    }),
    //get all venues list for dropdown
    getVenuesList: build.query({
      query: () => ({
        url: `/venues/venue-dropdown`,
        method: "GET",
      }),
      providesTags: ["vanues"],
    }),

    //get single venue details by id
    getSingleVenue: build.query({
      query: (id) => ({
        url: `/venues/${id}`,
        method: "GET",
      }),
      providesTags: ["vanues"],
    }),
  }),
});

export const {
  useGetAvailableVenuesQuery,
  useGetVenuesListQuery,
  useGetSingleVenueQuery,
} = VanuesApi;
export default VanuesApi;
