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
  const { data: rpg, isLoading: isLoadingRpg } = useGetRpgQuery()
  const { data: action, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: horror, isLoading: isLoadingHorror } = useGetHorrorQuery()
  const { data: fps, isLoading: isLoadingFps } = useGetFPSQuery()
  const { data: sports, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: sim, isLoading: isLoadingSim } = useGetSimQuery()
  const { data: puzzle, isLoading: isLoadingPuzzle } = useGetPuzzleQuery()

  return (
    <>
      <ProductsList
        id="rpg"
        games={rpg}
        title="RPG"
        background="black"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="action-adventure"
        games={action}
        title="Action/Adventure"
        background="grey"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="horror"
        games={horror}
        title="Horror"
        background="black"
        isLoading={isLoadingHorror}
      />
      <ProductsList
        id="fps"
        games={fps}
        title="FPS"
        background="grey"
        isLoading={isLoadingFps}
      />
      <ProductsList
        id="sports"
        games={sports}
        title="Sports"
        background="black"
        isLoading={isLoadingSports}
      />
      <ProductsList
        id="sim"
        games={sim}
        title="Simulation"
        background="grey"
        isLoading={isLoadingSim}
      />
      <ProductsList
        id="puzzle"
        games={puzzle}
        title="Puzzle"
        background="black"
        isLoading={isLoadingPuzzle}
      />
    </>
  )
}

export default Categories
