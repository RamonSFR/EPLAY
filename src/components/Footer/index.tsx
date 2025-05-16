import * as S from './styles'

const fullYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categories</S.SectionTitle>
        <S.Links>
          <li><S.Link>RPG</S.Link></li>
          <li><S.Link>FPS</S.Link></li>
          <li><S.Link>Horror</S.Link></li>
          <li><S.Link>Soulslikes</S.Link></li>
          <li><S.Link>Sports</S.Link></li>
          <li><S.Link>Adventure</S.Link></li>
          <li><S.Link>Action</S.Link></li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Quick Acess</S.SectionTitle>
        <S.Links>
          <li><S.Link>New</S.Link></li>
          <li><S.Link>Promo</S.Link></li>
          <li><S.Link>Coming soon</S.Link></li>
        </S.Links>
      </S.FooterSection>
      <p>{fullYear} - &copy; E-PLAY All rights reserved</p>
    </div>
  </S.Container>
)

export default Footer
