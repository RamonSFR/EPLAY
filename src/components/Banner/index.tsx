import Tag from '../Tag'
import Button from '../Button'

import { ApiPath, useGetFeaturedGameQuery } from '../../services/api'
import priceFormatter from '../../utils/functions/priceFormatter'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return (
      <div className="container">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <S.Image
      style={{
        backgroundImage: `url(${ApiPath}${game?.media.cover})`
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
          to={`/product/${game.id}`}
          title="click here to enjoy this offer"
        >
          Check it out
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
