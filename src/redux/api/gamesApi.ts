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
      query: (data) => ({
        url: `/matches`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["games"],
    }),
    //update games
    updateGames: build.mutation({
      query: ({ id, data }) => ({
        url: `/matches/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["games"],
    }),
    //delete games
    deleteGames: build.mutation({
      query: (id) => ({
        url: `/matches/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["games"],
    }),
  }),
});

export const {
  useGetAllGamesQuery,
  useGetSingelGamesQuery,
  useCreateGamesMutation,
  useUpdateGamesMutation,
  useDeleteGamesMutation,
} = GamesApi;
export default GamesApi;
