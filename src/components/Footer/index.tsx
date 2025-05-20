import * as S from './styles'

const fullYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categories</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link title="click to show RPG games" to="/categories#rpg">
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="click to show Action/Adventure games"
              to="/categories#action-adventure"
            >
              Action/Adventure
            </S.Link>
          </li>
          <li>
            <S.Link title="click to show Horror games" to="/categories#horror">
              Horror
            </S.Link>
          </li>
          <li>
            <S.Link title="click to show FPS games" to="/categories#fps">
              FPS
            </S.Link>
          </li>
          <li>
            <S.Link title="click to show Sports games" to="/categories#sports">
              Sports
            </S.Link>
          </li>
          <li>
            <S.Link title="click to show Simulation games" to="/categories#sim">
              Simulation
            </S.Link>
          </li>
          <li>
            <S.Link title="click to show Puzzle games" to="/categories#puzzle">
              Puzzle
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Quick Acess</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="click to access on sale games section"
              to="/#on-sale"
            >
              Promo
            </S.Link>
          </li>
          <li>
            <S.Link
              title="click to access on coming soon games section"
              to="/#coming-soon"
            >
              Coming soon
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{fullYear} - &copy; E-PLAY All rights reserved</p>
    </div>
  </S.Container>
)

export default Footer
