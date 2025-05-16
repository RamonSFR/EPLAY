import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/globalStyle'
import Header from './components/Header'
import AppRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
