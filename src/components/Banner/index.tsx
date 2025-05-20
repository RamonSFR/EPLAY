import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { ApiPath, useGetFeaturedGameQuery } from '../../services/api'
import parseToUsd from '../../utils/functions/parseToUsd'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
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
                    from <span>{parseToUsd(game.prices.old)}</span> <br />
                    to {parseToUsd(game.prices.current)}
                  </>
                ) : (
                  <>{parseToUsd(game?.prices.current)}</>
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
