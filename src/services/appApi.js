import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/" }),
    endpoints: (builder) => ({
      signup: builder.mutation({
        query: (user) => ({
          url: "/users",
          method: "POST",
          body: user,
        }),
      }),
  
      login: builder.mutation({
        query: (user) => ({
          url: "#/components/schemas/Users",
          method: "POST",
          body: user,
        }),
      }),
    }),
  });

  export const {
    useSignupMutation,
    useLoginMutation,
  } = appApi;