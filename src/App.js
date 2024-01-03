import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/global/Header'
import Home from './pages/Home'
import AllBikes from './pages/AllBikes'
import About from './pages/About'
import CartDesign from './components/cart/CartDesign'
import BikeDetailsPage from './pages/BikeDetailsPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Checkout from './components/checkout/Checkout'
import { useDispatch,} from 'react-redux'
import { get_model } from './store/reducers/homeReducer'
import ModelSlug from './pages/ModelSlug'
import BrandSlug from './pages/BrandSlug'
import SearchBikes from './pages/SearchBikes'
import SucessOrder from './pages/SucessOrder'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import ProtectUser from './utils/ProtectUser'
import Index from './components/dashboard/Index'
import MyOrders from './components/dashboard/MyOrders'
import OrderDetails from './components/dashboard/OrderDetails'
import ChangePassword from './components/dashboard/ChangePassword'
import ForgetPassword from './pages/ForgetPassword'
import Wishlist from './pages/Wishlist'
import ConditionPage from './pages/ConditionPage'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_model())
  }, [])


  return (
    <BrowserRouter>
      <CartDesign />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allbikes' element={<AllBikes />} />
        <Route path='/bikes?' element={<ModelSlug />} />
        <Route path='/bikes-brands/search?' element={<SearchBikes />} />
        <Route path='/bikes-brands?' element={<BrandSlug />} />
        <Route path='/about' element={<About />} />
        <Route path='/bike/details/:slug' element={<BikeDetailsPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/garage-checkout' element={<Checkout />} />
        <Route path='/successful-order' element={<SucessOrder />} />
        <Route path='/error' element={<Error />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/my-wishlist' element={<Wishlist />} />
        <Route path='/conditions' element={<ConditionPage />} />

        


        <Route path='/dashboard' element={<ProtectUser />}>
          <Route path='' element={<Dashboard />} >
            <Route path='' element={<Index />} />
            <Route path='my-orders' element={<MyOrders/>} />
            <Route path='order/details/:orderId' element={<OrderDetails />} />
            <Route path='change-password' element={<ChangePassword />} />
          </Route>
        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App

