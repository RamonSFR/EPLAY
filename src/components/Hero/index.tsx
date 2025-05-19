import { useDispatch } from 'react-redux'

import type { Game } from '../../pages/Home'
import { Banner, Infos } from './styles'
import priceFormatter from '../../utils/functions/priceFormatter'
import setSystems from '../../utils/functions/setSystems'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button'
import Tag from '../Tag'
import { ApiPath } from '../../services/api'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addGameToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

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
        backgroundImage: `url(${ApiPath}${game.media.cover})`
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
                title="click to add this game to the shopping cart"
                variant="primary"
                onClick={() => addGameToCart()}
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
