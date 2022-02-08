import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: "/users/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    logout: build.mutation({
      query: () => ({
        url: `/users/logout`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    refresh: build.query({
      query: () => ({
        url: `/users/current`,
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
} = authApi;
