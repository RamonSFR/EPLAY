import * as S from './syles'

import bannerImg from '../../assets/images/expedition33-banner.jpg'

const Banner = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <S.Title>Clair Obscur: Expedition 33</S.Title>
      <S.Prices>
        from <span>$60</span> <br />
        to $49.99
      </S.Prices>
    </div>
  </S.Image>
)

export default Banner
