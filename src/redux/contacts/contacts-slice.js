import { createReducer, createAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61fe50b5a58a4e00173c97d8.mockapi.io/",
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
  }),
});

export const changeFilter = createAction("contacts/changeFilter");
export const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
