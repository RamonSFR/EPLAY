import ProductsList from '../../components/ProductsList'
import {
  useGetActionQuery,
  useGetFPSQuery,
  useGetHorrorQuery,
  useGetSportsQuery,
  useGetSimQuery,
  useGetRpgQuery,
  useGetPuzzleQuery
} from '../../services/api'

const Categories = () => {
  const { data: rpg } = useGetRpgQuery()
  const { data: action } = useGetActionQuery()
  const { data: horror } = useGetHorrorQuery()
  const { data: fps } = useGetFPSQuery()
  const { data: sports } = useGetSportsQuery()
  const { data: sim } = useGetSimQuery()
  const { data: puzzle } = useGetPuzzleQuery()

  if (!rpg || !action || !horror || !fps || !sports || !sim || !puzzle) {
    return (
      <div className="container">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <>
      <ProductsList id='rpg' games={rpg} title="RPG" background="black" />
      <ProductsList id='action-adventure' games={action} title="Action/Adventure" background="grey" />
      <ProductsList id='horror' games={horror} title="Horror" background="black" />
      <ProductsList id='fps' games={fps} title="FPS" background="grey" />
      <ProductsList id='sports' games={sports} title="Sports" background="black" />
      <ProductsList id='sim' games={sim} title="Simulation" background="grey" />
      <ProductsList id='puzzle' games={puzzle} title="Puzzle" background="black" />
    </>
  )
}

export default Categories
