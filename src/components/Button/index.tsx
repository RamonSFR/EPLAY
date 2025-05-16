import { Btn, BtnLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, children, title, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <Btn type="button" title={title} onClick={onClick}>
        {children}
      </Btn>
    )
  }

  return <BtnLink title='title' to={to as string}>{children}</BtnLink>
}

export default Button
