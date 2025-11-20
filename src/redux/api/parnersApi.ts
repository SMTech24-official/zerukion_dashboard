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
    //get single partners
    getSingleParners: build.query({
      query: (id) => ({
        url: `/partner-requests/get-partner-by-id/${id}`,
        method: "GET",
      }),
      providesTags: ["partners"],
    }),
    //get all partners
    acceptPartnerRequest: build.mutation({
      query: (data) => ({
        url: `/partner-requests/accept-partner-request`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["partners"],
    }),
    //get all partners
    rejectPartnerRequest: build.mutation({
      query: (id) => ({
        url: `/partner-requests/reject-partner-request/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["partners"],
    }),
  }),
});

export const {
  useGetAllStatisticsQuery,
  useGetAllParnersQuery,
  useGetSingleParnersQuery,
  useAcceptPartnerRequestMutation,
  useRejectPartnerRequestMutation,
} = PatnersApi;
export default PatnersApi;
