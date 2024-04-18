import { apiSlice } from "./apiSlice";
const phonesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPhones: builder.query({
      query: () => ({
        url: "",
      }),
      keepUnusedDataFor: 10,
      providesTags: ["phones"],
    }),
    getPhone: builder.query({
      query: (phoneId) => ({
        url: `/${phoneId}`,
      }),
      keepUnusedDataFor: 10,
      providesTags: ["phones"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["phones"],
    }),
    editProduct: builder.mutation({
      query: ({ phoneId, data }) => ({
        url: `/${phoneId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["phones"],
    }),
    deletePhoneProduct: builder.mutation({
      query: (phoneId) => ({
        url: `/${phoneId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["phones"],
    }),
  }),
});

export const {
  useGetAllPhonesQuery,
  useGetPhoneQuery,
  useDeletePhoneProductMutation,
  useAddProductMutation,
  useEditProductMutation,
} = phonesApiSlice;
