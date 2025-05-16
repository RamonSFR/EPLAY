import bannerImg from '../../assets/images/banners/expedition33-banner.jpg'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>Steam | PS5 | Xbox Series S/X</Tag>
      </div>
      <Infos>
        <h2>Clair Obscur: Expedition 33</h2>
        <p>
          <span>from $69.99</span>
          to $49.99
        </p>
        <Button type='button' title='click to add this game to shopping cart' variant='primary'>Add to cart</Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
