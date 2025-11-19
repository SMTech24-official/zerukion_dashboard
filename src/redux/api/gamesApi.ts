import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const GamesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all games
    getAllGames: build.query({
      query: ({ search, status }) => ({
        url: `/matches/all-matches-for-dashboard`,
        method: "GET",
        params: { search, status },
      }),
      providesTags: ["games", "vanues"],
    }),
    //get game by id
    getSingelGames: build.query({
      query: (id) => ({
        url: `/matches/${id}`,
        method: "GET",
      }),
      providesTags: ["games", "vanues"],
    }),

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

export const {
  useGetAllGamesQuery,
  useGetSingelGamesQuery,
  useCreateGamesMutation,
} = GamesApi;
export default GamesApi;
