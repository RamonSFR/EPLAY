import setSystems from '../../utils/functions/setSystems'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  id: number
  title: string
  category: string
  system: string[]
  description: string
  infos: string[]
  image: string
}

const Product = ({
  id,
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  return (
    <S.Card title={`click here to see more details of the game: ${title}`} to={`/product/${id}`}>
      <img draggable={false} src={image} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      {setSystems(system) && <Tag>{setSystems(system)}</Tag>}
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
