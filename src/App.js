import { useEffect } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './components/global/Header'
import Home from './pages/Home'
import AllBikes from './pages/AllBikes'
import About from './pages/About'
import CartDesign from './components/cart/CartDesign'
import BikeDetailsPage from './pages/BikeDetailsPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Checkout from './components/checkout/Checkout'
import {useDispatch} from 'react-redux'
import {get_model} from './store/reducers/homeReducer'
import ModelSlug from './pages/ModelSlug'
import BrandSlug from './pages/BrandSlug'
import SearchBikes from './pages/SearchBikes'

const App = () => {
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(get_model())
   },[])


  return (
    <BrowserRouter>
    <CartDesign/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/allbikes' element={<AllBikes/>} />
      <Route path='/bikes?' element={<ModelSlug/>} />
      <Route path='/bikes-brands/search?' element={<SearchBikes/>} />
      <Route path='/bikes-brands?' element={<BrandSlug/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/bike/details/:slug' element={<BikeDetailsPage/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/garage-checkout' element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

