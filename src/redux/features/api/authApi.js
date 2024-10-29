import { baseApi } from "../../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
    registerUser: build.mutation({
      query: (data) => {
        return {
          url: "/register",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
