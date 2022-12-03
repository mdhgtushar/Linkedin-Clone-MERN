import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const postsAdapter = createEntityAdapter()
const initialState = postsAdapter.getInitialState()


export const crudApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCruds: builder.query({
            query: () => '/crud',
            transformResponse: responseData => {
                return postsAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'Crud', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Crud', id }))
            ]
        }),
        addNewCrud: builder.mutation({
            query: initialPost => ({
                url: '/crud',
                method: 'POST',
                body: {
                    ...initialPost
                }
            }),
            invalidatesTags: [
                { type: 'Crud', id: "LIST" }
            ]
        }),
        deleteCrud: builder.mutation({
            query: ({ id }) => ({
                url: `/crud/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: () => [
                { type: 'Crud', id: "LIST" }
            ]
        })
    })
})



export const {
    useGetCrudsQuery,
    useAddNewCrudMutation,
    useDeleteCrudMutation
} = crudApiSlice
