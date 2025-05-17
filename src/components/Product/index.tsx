import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string[]
  description: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => {
  const setSystems = (system: string[]) => system.join(' | ')
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <S.Card>
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
