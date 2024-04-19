import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/orders" }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    getOrders: builder.mutation({
      query: () => ({
        url:'/',
        method:'GET'
      }),
    }),
    getOrderByIdUser: builder.mutation({
      query: (idUser) => ({
        url:`/${idUser}`,
        method:'GET'
      }),
    }),
    addOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
      }),
    }),
    updateOrder: builder.mutation({
      query: ({ id, updateOrderData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updateOrderData,
      }),
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    getOneOrder: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    getOrdersDetail: builder.mutation({
      query: () => ({
        url:'/orderdetail',
        method:'GET'
      }),
    }),

    getOneOrderDetail: builder.mutation({
      query:(id) => ({
        url: `/orderdetail/${id}`,
        method: "GET"
      })
    }),
    getOneOrderDetailByUsername: builder.mutation({
      query:(userName) => ({
        url: `/orderdetailbyusername/${userName}`,
        method: "GET"
      })
    }),
    updateRoomNumberInOrderDetail: builder.mutation({
      query: ({ id, dataRoomNumber }) => ({
        url: `/updateRoomNumberInOrderDetail/${id}`,
        method: "PUT",
        body: dataRoomNumber,
      }),
    }),
  }),
});

export const {
  useGetOrdersMutation,
  useAddOrderMutation,
  useUpdateOrderMutation,
  useUpdateRoomNumberInOrderDetailMutation,
  useDeleteOrderMutation,
  useGetOneOrderMutation,
  useGetOrdersDetailMutation,
  useGetOneOrderDetailMutation,
  useGetOneOrderDetailByUsernameMutation,
  useGetOrderByIdUserMutation
} = ordersApi;
