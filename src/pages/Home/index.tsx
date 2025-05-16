import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promotions" background="grey" />
    <ProductsList title="Coming Soon" background="black" />
  </>
)

export default Home
