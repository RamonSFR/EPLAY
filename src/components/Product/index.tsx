import Tag from "../Tag"

import * as S from "./styles"
import gameCover from '../../assets/images/resident.png'

const Product = () => (
  <S.Card>
    <img draggable={false} src={gameCover} />
    <S.Title>Game Name</S.Title>
    <Tag>Category</Tag>
    <Tag>Windows</Tag>
    <S.Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate
      sapiente laudantium iure molestias vitae velit obcaecati aliquam ut, rerum
      ullam, quam quo id quas pariatur consequatur cumque quidem natus?
    </S.Description>
  </S.Card>
)

export default Product
