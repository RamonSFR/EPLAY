import * as S from './styles'

import bannerImg from '../../assets/images/banners/expedition33-banner.jpg'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Highlighted game</Tag>
      <div>
        <S.Title>Clair Obscur: Expedition 33</S.Title>
        <S.Prices>
          from <span>$69.99</span> <br />
          to $49.99
        </S.Prices>
      </div>
      <Button type="link" to="/product" title="click here to enjoy this offer">
        Check it out
      </Button>
    </div>
  </S.Image>
)

export default Banner
