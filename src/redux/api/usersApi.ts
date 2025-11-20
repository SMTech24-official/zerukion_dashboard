import { baseApi } from "./baseApi";

const UsersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: ({ filter, search }) => ({
        url: `/users/all-users`,
        method: "GET",
        params: { filter, search },
      }),
      providesTags: ["users"],
    }),
    //update status
    updateUserStatus: build.mutation({
      query: (id) => ({
        url: `/users/update-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserStatusMutation } = UsersApi;
export default UsersApi;
