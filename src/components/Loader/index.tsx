import { PacmanLoader } from 'react-spinners'

import { colors as c } from '../../styles/globalStyle'
import * as S from './styles'

const Loader = () => (
  <S.Container>
    <PacmanLoader color={c.white} />
  </S.Container>
)

export default Loader
