import { useState } from 'react'

import Section from '../Section'

import playIco from '../../assets/images/icons/play.png'
import zoomIco from '../../assets/images/icons/zoom.png'
import closeIco from '../../assets/images/icons/close.png'
import { ApiPath } from '../../services/api'

import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return `${ApiPath}${item.url}`
    return `${ApiPath}${defaultCover}`
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
          {items.map((media, index) => (
            <S.Item
              key={index}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: `${media.url}`
                })
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
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIco} onClick={closeModal} alt="close icon" />
          </header>
          {modal.type === 'image' ? (
            <img src={`${ApiPath}${modal.url}`} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()} />
      </S.Modal>
    </>
  )
}

export default Gallery
