import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:5000/api/";


export const api =  createApi({
    reducerPath: "api",
    tagTypes: ['projects'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getProjects: builder.query({
            query: ()=> '/projects/user/1',
        }),
    })
});

export const {useGetProjectsQuery} = api;