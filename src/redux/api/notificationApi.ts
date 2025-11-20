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
    createNotification: build.mutation({
      query: (data) => ({
        url: `/notifications/notify-match-players`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetAllNotificationsQuery, useCreateNotificationMutation } =
  NotificationApi;
export default NotificationApi;
