import { useEffect, useState } from 'react'

import * as S from './styles'

import Tag from '../Tag'
import Button from '../Button'
import type { Game } from '../../pages/Home'
import { priceFormatter } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-seven-wine.vercel.app/highlight')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <S.Image
      style={{
        backgroundImage: `url(https://fake-api-seven-wine.vercel.app${game?.media.cover})`
      }}
    >
      <div className="container">
        <Tag size="big">Highlighted game</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            {game.prices.current === null ? (
              <>Coming Soon</>
            ) : (
              <>
                {game?.prices.old ? (
                  <>
                    from <span>{priceFormatter(game.prices.old)}</span> <br />
                    to {priceFormatter(game.prices.current)}
                  </>
                ) : (
                  <>{priceFormatter(game?.prices.current)}</>
                )}
              </>
            )}
          </S.Prices>
        </div>
        <Button
          type="link"
          to="/product"
          title="click here to enjoy this offer"
        >
          Check it out
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
