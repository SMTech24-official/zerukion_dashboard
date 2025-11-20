import { baseApi } from "./baseApi";

const NotificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllNotifications: build.query({
      query: () => ({
        url: `/notifications/notification-history`,
        method: "GET",
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

export const { useGetAllNotificationsQuery } = NotificationApi;
export default NotificationApi;
