import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Users", id } as const)), { type: "Users", id: "LIST" }]
          : [{ type: "Users", id: "LIST" }],
    }),
    addUser: build.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    getUser: build.query<User, number>({
      query: (id) => `user/${id}`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),

    updateUser: build.mutation<User, Partial<User>>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `user/${id}`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Users", id }],
    }),

    deleteUser: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Users", id }],
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } =
  userApi;
