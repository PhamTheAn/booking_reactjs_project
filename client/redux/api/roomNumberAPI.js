import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const roomNumbersApi = createApi({
    reducerPath: "roomNumbersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/roomnumbers" }),
    tagTypes: ["RoomNumber"],
    endpoints: (builder) => ({
      getRoomNumbers: builder.mutation({
        query: () => ({
          url:'/',
          method:'GET'
        }),
      }),
      addRoomNumber: builder.mutation({
        query: ({idRoom, quantity}) => ({
          url: "/",
          method: "POST",
          body: {idRoom, quantity},
        }),
      }),
      updateRoomNumber: builder.mutation({
        query: ({ id, updateRoomNumberData }) => ({
          url: `/${id}`,
          method: "PUT",
          body: updateRoomNumberData,
        }),
      }),
      deleteRoomNumber: builder.mutation({
        query: (id) => ({
          url: `/${id}`,
          method: "DELETE",
        }),
      }),
      getListRoomNumberByIdRoom: builder.mutation({
        query: (idRoom) => ({
          url: `/listRoomNumberByIdRoom/${idRoom}`,
          method: "GET",
        }),
      }),
      updateStatusRoomNumber: builder.mutation({
        query: (id) => ({
            url: `/updateStatusRoomNumber/${id}`,
            method: 'PUT'
        }),
      }),
      getOneRoomNumber: builder.mutation({
        query: (id) => ({
          url: `/${id}`,
          method: "GET",
        }),
      }),
    }),
  });

  export const {
    useGetRoomNumbersMutation,
    useAddRoomNumberMutation,
    useUpdateRoomNumberMutation,
    useDeleteRoomNumberMutation,
    useGetListRoomNumberByIdRoomMutation,
    useGetOneRoomNumberMutation,
    useUpdateStatusRoomNumberMutation,
  } = roomNumbersApi;