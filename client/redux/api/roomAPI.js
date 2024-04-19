import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/rooms/",
  }),
  tagTypes: ["Room"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "",
    }),
    addRoom: builder.mutation({
      query: (newRoom) => ({
        url: "/",
        method: "POST",
        body: newRoom,
      }),
    }),
    updateRoom: builder.mutation({
      query: ({ id, updateRoomData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updateRoomData,
      }),
      invalidatesTags: ["Pet"],
    }),
    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    getOneRoom: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useAddRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useGetOneRoomMutation,
} = roomsApi;
