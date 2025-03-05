import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from '../authSlice';

const USER_API = 'http://localhost:5000/api/user/';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            queryFn: async (inputData) => {
                try {
                    const response = await fetch(`${USER_API}register`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(inputData),
                        credentials: 'include',
                    });

                    if (!response.ok) {
                        const error = await response.json();
                        return { error: error.message };
                    }

                    const data = await response.json();
                    return { data };
                } catch (error) {
                    return { error: error.message };
                }
            },
        }),
        loginUser: builder.mutation({
            queryFn: async (inputData) => {
                try {
                    const response = await fetch(`${USER_API}login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(inputData),
                        credentials: 'include',
                    });

                    if (!response.ok) {
                        const error = await response.json();
                        return { error: error.message };
                    }

                    const data = await response.json();
                    return { data };
                } catch (error) {
                    return { error: error.message };
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({ user: result.data.user }));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
