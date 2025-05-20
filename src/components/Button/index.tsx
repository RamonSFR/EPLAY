import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  children,
  title,
  onClick,
  to,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.Btn variant={variant} type={type} title={title} onClick={onClick}>
        {children}
      </S.Btn>
    )
  }

  return (
    <S.BtnLink title="title" to={to as string}>
      {children}
    </S.BtnLink>
  )
}

export default Button
