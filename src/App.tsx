import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import GlobalStyle from './styles/globalStyle'
import ProductsList from './components/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title='Promotions' background='grey'/>
        <ProductsList title='Coming Soon' background='black'/>
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
