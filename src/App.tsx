import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle from './styles/globalStyle'
import Header from './components/Header'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
