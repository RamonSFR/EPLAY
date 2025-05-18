import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import type { Game } from '../Home'

const Categories = () => {
  const [action, setAction] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])
  const [horror, setHorror] = useState<Game[]>([])
  const [fps, setFps] = useState<Game[]>([])
  const [sports, setSports] = useState<Game[]>([])
  const [sim, setSim] = useState<Game[]>([])
  const [puzzle, setPuzzle] = useState<Game[]>([])

  const fetchGames = () => {
    fetch('https://fake-api-seven-wine.vercel.app/action')
      .then((res) => res.json())
      .then((res) => setAction(res))

    fetch('https://fake-api-seven-wine.vercel.app/rpg')
      .then((res) => res.json())
      .then((res) => setRpg(res))

    fetch('https://fake-api-seven-wine.vercel.app/horror')
      .then((res) => res.json())
      .then((res) => setHorror(res))

    fetch('https://fake-api-seven-wine.vercel.app/fps')
      .then((res) => res.json())
      .then((res) => setFps(res))

    fetch('https://fake-api-seven-wine.vercel.app/sports')
      .then((res) => res.json())
      .then((res) => setSports(res))

    fetch('https://fake-api-seven-wine.vercel.app/sim')
      .then((res) => res.json())
      .then((res) => setSim(res))

    fetch('https://fake-api-seven-wine.vercel.app/puzzle')
      .then((res) => res.json())
      .then((res) => setPuzzle(res))
  }

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <>
      <ProductsList games={rpg} title="RPG" background="black" />
      <ProductsList
        games={action}
        title="Action/Adventure"
        background="grey"
      />
      <ProductsList games={horror} title="Horror" background="black" />
      <ProductsList games={fps} title="FPS" background="grey" />
      <ProductsList games={sports} title="Sports" background="black" />
      <ProductsList games={sim} title="Simulation" background="grey" />
      <ProductsList games={puzzle} title="Puzzle" background="black" />
    </>
  )
}

export default Categories
