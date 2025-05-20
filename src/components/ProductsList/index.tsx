import type { Game } from '../../pages/Home'
import { ApiPath } from '../../services/api'
import parseToUsd from '../../utils/functions/parseToUsd'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.prices.current === null) {
      tags.push('Coming Soon')
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToUsd(game.prices.current))
    }

    return tags
  }

  return (
    <S.Container id={id} background={background}>
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
