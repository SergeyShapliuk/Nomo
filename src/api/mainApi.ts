import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const mainApi = createApi({
  reducerPath: 'mainReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.taptable.ru/api/',
  }),
  endpoints: builder => ({}),
});
