import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/globalStyle'
import Header from './components/Header'
import AppRoutes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
