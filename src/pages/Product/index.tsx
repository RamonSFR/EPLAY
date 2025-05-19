import { useParams } from 'react-router-dom'

import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import setSystems from '../../utils/functions/setSystems'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return (
      <div className="container">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <>
      <Hero game={game} />
      <Section title="About the game" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="More details" background="grey">
        <p>
          <b>Platform:</b> {setSystems(game.details.system)}
          <br />
          <b>Developer:</b> {game.details.developer} <br />
          <b>Studio:</b> {game.details.publisher} <br />
          <b>Languages: </b>
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        items={game.media.gallery}
        name={game.name}
        defaultCover={game.media.cover}
      />
    </>
  )
}

export default Product
