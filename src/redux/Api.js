import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api/data",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (body) => ({
        url: "regUser",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          name: body.name,
          password: body.password,
        },
      }),
    }),
  }),
});

export const { usePostUserMutation } = Api;
