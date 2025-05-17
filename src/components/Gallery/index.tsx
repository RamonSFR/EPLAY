import { Item, Items, Action } from './styles'
import Section from '../Section'

import playIco from '../../assets/images/icons/play.png'
import zoomIco from '../../assets/images/icons/zoom.png'

import expeditionImage1 from '../../assets/images/gallery/expedition33/image1.jpg'
import expeditionImage2 from '../../assets/images/gallery/expedition33/image2.jpg'
import expeditionVideo1 from '../../assets/videos/gallery/expedition33/video1.webm'
import expeditionVideo2 from '../../assets/videos/gallery/expedition33/video2.webm'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: expeditionImage1
  },
  {
    type: 'image',
    url: expeditionImage2
  },
  {
    type: 'video',
    url: expeditionVideo1
  },
  {
    type: 'video',
    url: expeditionVideo2
  }
]

const Gallery = ({defaultCover}: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIco
    return playIco
  }

  return (
  <Section title="Gallery" background="black">
    <div>
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
            <img
              src={getMediaCover(media)}
              alt={`${index + 1} media of the game ${name}`}
            />
            <Action>
              <img
                src={getMediaIcon(media)}
                alt={media.type === 'image' ? 'click to zoom image' : 'click to play video'}
              />
            </Action>
          </Item>
        ))}
      </Items>
    </div>
  </Section>
)
}

export default Gallery
