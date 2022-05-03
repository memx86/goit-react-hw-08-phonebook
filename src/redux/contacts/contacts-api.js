import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    fetchContacts: build.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    addContact: build.mutation({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    removeContact: build.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    updateContact: build.mutation({
      query: ({ id, ...contact }) => ({
        url: `/contacts/${id}`,
        method: "PATCH",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
  useUpdateContactMutation,
} = contactsApi;
