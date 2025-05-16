import ProductsList from '../../components/ProductsList'
import type Game from '../../models/Game'

import mw3 from '../../assets/images/covers/cover-mw3.png'
import bo6 from '../../assets/images/covers/cover-bo6.png'
import tunic from '../../assets/images/covers/cover-tunic.jpg'
import tlou2 from '../../assets/images/covers/cover-tlou2.avif'
import sh2 from '../../assets/images/covers/cover-silenthill2.avif'
import bloodborne from '../../assets/images/covers/cover-bloodborne.jpg'
import eldenring from '../../assets/images/covers/cover-eldenring.jpg'
import cyberpunk from '../../assets/images/covers/cover-cyberpunk2077.jpg'

const promotions: Game[] = [
  {
    id: 1,
    title: 'Call of Duty Modern Warfare III',
    description: 'lorem ipsum dolor',
    category: 'FPS',
    infos: ['10%', '$55.90'],
    image: mw3,
    systems: 'Steam | PS5'
  },
  {
    id: 2,
    title: 'Call of Duty Black Ops 6',
    description: 'lorem ipsum dolor',
    category: 'FPS',
    infos: ['10%', '$70'],
    image: bo6,
    systems: 'Steam | PS5'
  },
  {
    id: 3,
    title: 'Tunic',
    description: 'lorem ipsum dolor',
    category: 'Adventure',
    infos: ['45%', '$19.99'],
    image: tunic,
    systems: 'Steam | Xbox Series S/X | PS5'
  },
  {
    id: 4,
    title: 'The Last of Us Part II',
    description: 'lorem ipsum dolor',
    category: 'Narrative',
    infos: ['15%', '$50'],
    image: tlou2,
    systems: 'Steam | PS5'
  }
]

const bestSellers: Game[] = [
  {
    id: 5,
    title: 'Silent Hill 2',
    description: 'lorem ipsum dolor',
    category: 'Survival Horror',
    infos: ['25%', '$50'],
    image: sh2,
    systems: 'Steam | PS5'
  },
  {
    id: 6,
    title: 'BloodBorne',
    description: 'lorem ipsum dolor',
    category: 'Souslike',
    infos: ['10%', '$70'],
    image: bloodborne,
    systems: 'PS4 | PS5'
  },
  {
    id: 7,
    title: 'Cyberpunk 2077',
    description: 'lorem ipsum dolor',
    category: 'RPG',
    infos: ['45%', '$30'],
    image: cyberpunk,
    systems: 'Steam | Xbox Series S/X | PS5'
  },
  {
    id: 8,
    title: 'Elden Ring',
    description: 'lorem ipsum dolor',
    category: 'Soulslike',
    infos: ['40$', '$40'],
    image: eldenring,
    systems: 'Steam | Xbox Series S/X | PS5'
  }
]

const Categories = () => (
  <>
    <ProductsList games={promotions} title="RPG" background="grey" />
    <ProductsList games={bestSellers} title="Action" background="black" />
    <ProductsList games={promotions} title="FPS" background="grey" />
    <ProductsList games={bestSellers} title="Adventure" background="black" />
  </>
)

export default Categories
