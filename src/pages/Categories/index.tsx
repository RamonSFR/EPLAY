import ProductsList from '../../components/ProductsList'
import type { Game } from '../Home'

const promotions: Game[] = [
]

const bestSellers: Game[] = [
]

const Categories = () => (
  <>
    <ProductsList games={promotions} title="RPG" background="grey" />
    <ProductsList games={bestSellers} title="Action" background="black" />
    <ProductsList games={promotions} title="FPS" background="grey" />
    <ProductsList games={bestSellers} title="Adventure" background="black" />
  </>
)

export default Categories
