import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Game } from '../pages/Home'

export const ApiPath = 'https://fake-api-xyxf.vercel.app/'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    phone: string
  }
  delivery: {
    address: string
    zipCode: string
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

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
    }),
    purchase: builder.mutation<unknown, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
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
  useGetGameQuery,
  usePurchaseMutation
} = api
export default api
