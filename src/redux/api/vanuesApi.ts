import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const VanuesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all available venues by date
    getAllVenues: build.query({
      query: ({ date }) => ({
        url: `/venues`,
        method: "GET",
        params: { date },
      }),
      providesTags: ["vanues"],
    }),

    //create new venue
    createVenue: build.mutation({
      query: (data) => ({
        url: `/venues`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["vanues"],
    }),

    //delete venue
    deleteVenue: build.mutation({
      query: (id) => ({
        url: `/venues/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vanues"],
    }),

    //update venue
    updateVenue: build.mutation({
      query: ({ id, data }) => ({
        url: `/venues/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["vanues"],
    }),

    //get all available venues by date
    getAvailableVenues: build.query({
      query: ({ date }) => ({
        url: `/venues/available-venues`,
        method: "GET",
        params: { date },
      }),
      providesTags: ["vanues",'games'],
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
    //get single venue details by id
    getSportsType: build.query({
      query: () => ({
        url: `/settings/get-active-sports-type`,
        method: "GET",
      }),
      providesTags: ["vanues", "settings"],
    }),
  }),
});

export const {
  useGetAllVenuesQuery,
  useCreateVenueMutation,
  useDeleteVenueMutation,
  useUpdateVenueMutation,
  useGetAvailableVenuesQuery,
  useGetVenuesListQuery,
  useGetSingleVenueQuery,
  useGetSportsTypeQuery,
} = VanuesApi;
export default VanuesApi;
