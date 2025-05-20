import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetComingSoonQuery, useGetOnSaleQuery } from '../../services/api'

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
