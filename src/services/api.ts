import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Game } from '../pages/Home'

export const ApiPath = 'https://fake-api-xyxf.vercel.app/'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: ApiPath
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => '/highlight'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => '/onsale'
    }),
    getComingSoon: builder.query<Game[], void>({
      query: () => '/comingsoon'
    }),
    getAction: builder.query<Game[], void>({
      query: () => '/action'
    }),
    getRpg: builder.query<Game[], void>({
      query: () => '/rpg'
    }),
    getHorror: builder.query<Game[], void>({
      query: () => '/horror'
    }),
    getFPS: builder.query<Game[], void>({
      query: () => '/FPS'
    }),
    getSports: builder.query<Game[], void>({
      query: () => '/sports'
    }),
    getSim: builder.query<Game[], void>({
      query: () => '/sim'
    }),
    getPuzzle: builder.query<Game[], void>({
      query: () => '/puzzle'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `/games/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetComingSoonQuery,
  useGetActionQuery,
  useGetFPSQuery,
  useGetHorrorQuery,
  useGetPuzzleQuery,
  useGetRpgQuery,
  useGetSimQuery,
  useGetSportsQuery,
  useGetGameQuery
} = api
export default api
