import { api } from "./api";
import Cookies from "js-cookie";


export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({

    // register: builder.mutation({
    //   query: (body) => ({
    //     url: "/api/v1/user/auth/register/",
    //     method: "POST",
    //     body,
    //   }),
    // }),


    getProducts: builder.query({
      query: (params) => ({
        url: "/api/v1/main/products/",
        params,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
} = productApi
