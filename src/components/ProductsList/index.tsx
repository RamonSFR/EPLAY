import type { Game } from '../../pages/Home'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

export const priceFormatter = (price = 0) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
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

  const ApiLink = 'https://fake-api-seven-wine.vercel.app'

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
                image={`${ApiLink}${game.media.thumbnail}`}
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
