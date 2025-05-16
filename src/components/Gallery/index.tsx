import { Item, Items } from './styles'
import Section from '../Section'
import zelda from '../../assets/images/banners/expedition33-banner.jpg'

const Gallery = () => (
  <Section title="Gallery" background="black">
    <div>
      <Items>
        <Item>
          <img src={zelda} alt="link image" />
        </Item>
        <Item>
          <img src={zelda} alt="link image" />
        </Item>
        <Item>
          <img src={zelda} alt="link image" />
        </Item>
        <Item>
          <img src={zelda} alt="link image" />
        </Item>
      </Items>
    </div>
  </Section>
)

export default Gallery
