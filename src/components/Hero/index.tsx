import { useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'
import setSystems from '../../utils/functions/setSystems'
import Loader from '../Loader'

import { add, open } from '../../store/reducers/cart'
import { ApiPath } from '../../services/api'
import parseToUsd from '../../utils/functions/parseToUsd'

import * as S from './styles'

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
        <Loader />
      </div>
    )
  }

  return (
    <S.Banner
      style={{
        backgroundImage: `url(${ApiPath}${game.media.cover})`
      }}
    >
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{setSystems(game.details.system)}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          {game.prices.current === null ? (
            <p>Coming Soon</p>
          ) : (
            <>
              {game?.prices.old ? (
                <p>
                  from <span>{parseToUsd(game.prices.old)}</span> <br />
                  to {parseToUsd(game.prices.current)}
                </p>
              ) : (
                <p>{parseToUsd(game?.prices.current)}</p>
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
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
