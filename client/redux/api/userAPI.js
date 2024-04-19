import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/users" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "",
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/",
        method: "POST",
        body: newUser,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, updateUserData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updateUserData,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    getOneUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetOneUserMutation,
} = usersApi;
