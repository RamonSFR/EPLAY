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
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: comingSoonGames, isLoading: isLoadingSoon } =
    useGetComingSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promotions"
        background="grey"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="soon"
        games={comingSoonGames}
        title="Coming Soon"
        background="black"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
