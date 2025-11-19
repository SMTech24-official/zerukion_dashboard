import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const GamesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //ceate games
    createGames: build.mutation({
      query: (date) => ({
        url: `/matches`,
        method: "POST",
        body: date,
      }),
      invalidatesTags: ["games"],
    }),
  }),
});

export const { useCreateGamesMutation } = GamesApi;
export default GamesApi;
