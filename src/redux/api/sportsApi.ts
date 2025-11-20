import { baseApi } from "./baseApi";

const SportsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all sports
    getAllSports: build.query({
      query: () => ({
        url: `/settings/get-all-sports-type`,
        method: "GET",
      }),
      providesTags: ["sports"],
    }),
    //get all sports
    updateSportStatus: build.mutation({
      query: (id) => ({
        url: `/settings/toggle-sport-type-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["sports"],
    }),
    //create  sports type
    createSportStatus: build.mutation({
      query: (data) => ({
        url: `/settings/create-sport-type`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sports"],
    }),
    //create  sports trams and privacy
    createTermsPrivacy: build.mutation({
      query: (data) => ({
        url: `/settings/trams-privacy`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sports"],
    }),
    //get terms and privacy
    getTermsPrivacy: build.query({
      query: () => ({
        url: `/settings/get-trams-privacy`,
        method: "GET",
      }),
      providesTags: ["sports"],
    }),
  }),
});

export const {
  useGetAllSportsQuery,
  useUpdateSportStatusMutation,
  useCreateSportStatusMutation,
  useCreateTermsPrivacyMutation,
  useGetTermsPrivacyQuery,
} = SportsApi;
export default SportsApi;
