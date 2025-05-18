import type { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { priceFormatter } from '../ProductsList'

type Props = {
  game: Game
}

const setSystems = (system: string[]) => system.join(' | ')

const Hero = ({ game }: Props) => {
  if (!game) {
    return (
      <div className="container">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <Banner
      style={{
        backgroundImage: `url(https://fake-api-seven-wine.vercel.app${game.media.cover})`
      }}
    >
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{setSystems(game.details.system)}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          {game.prices.current === null ? (
            <p>Coming Soon</p>
          ) : (
            <>
              {game?.prices.old ? (
                <p>
                  from <span>{priceFormatter(game.prices.old)}</span> <br />
                  to {priceFormatter(game.prices.current)}
                </p>
              ) : (
                <p>{priceFormatter(game?.prices.current)}</p>
              )}
              <Button
                type="button"
                title="click to add this game to shopping cart"
                variant="primary"
              >
                Add to cart
              </Button>
            </>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
