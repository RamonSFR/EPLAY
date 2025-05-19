import type { Game } from '../../pages/Home'
import { ApiPath } from '../../services/api'
import priceFormatter from '../../utils/functions/priceFormatter'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}



const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.prices.current === null) {
      tags.push('Coming Soon')
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(priceFormatter(game.prices.current))
    }

    return tags
  }

  return (
    <S.Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                key={game.id}
                id={game.id}
                category={game.details.category}
                image={`${ApiPath}${game.media.thumbnail}`}
                infos={getGameTags(game)}
                description={game.description}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
