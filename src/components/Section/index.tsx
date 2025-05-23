import { type JSX } from 'react'

import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.Title>{title}</S.Title>
      {children}
    </div>
  </S.Container>
)

export default Section
