import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import GlobalStyle from './styles/globalStyle'
import Header from './components/Header'
import AppRoutes from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <AppRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
