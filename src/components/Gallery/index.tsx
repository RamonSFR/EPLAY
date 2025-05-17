import { useState } from 'react'

import * as S from './styles'
import Section from '../Section'
import type { GalleryItem } from '../../pages/Home'

import playIco from '../../assets/images/icons/play.png'
import zoomIco from '../../assets/images/icons/zoom.png'
import closeIco from '../../assets/images/icons/close.png'

import expeditionImage1 from '../../assets/images/gallery/expedition33/image1.jpg'
import expeditionImage2 from '../../assets/images/gallery/expedition33/image2.jpg'
import expeditionImage3 from '../../assets/images/gallery/expedition33/image3.jpg'
import expeditionVideo1 from '../../assets/videos/gallery/expedition33/video1.webm'
import expeditionVideo2 from '../../assets/videos/gallery/expedition33/video2.webm'



type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
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
    type: 'image',
    url: expeditionImage3
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

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIco
    return playIco
  }

  const closeModal = () =>
    setModal({ isVisible: false, type: 'image', url: '' })

  return (
    <>
      <Section title="Gallery" background="black">
        <S.Items>
          {mock.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`${index + 1} media of the game ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt={
                    media.type === 'image'
                      ? 'click to zoom image'
                      : 'click to play video'
                  }
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIco} onClick={() => closeModal()} alt="close icon" />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => closeModal()}
        />
      </S.Modal>
    </>
  )
}

export default Gallery
