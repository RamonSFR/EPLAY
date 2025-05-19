import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetComingSoonQuery, useGetOnSaleQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string[]
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: comingSoonGames } = useGetComingSoonQuery()

  if (!onSaleGames || !comingSoonGames) {
    return (
      <div className='container'>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <>
      <Banner />
      <ProductsList games={onSaleGames} title="Promotions" background="grey" />
      <ProductsList games={comingSoonGames} title="Coming Soon" background="black" />
    </>
  )
}

export default Home
