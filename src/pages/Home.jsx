
import { useEffect } from 'react'
import HeroSection from '../components/hero-section/Hero-section'
import ModelDesign from '../components/models/ModelDesign'
import FeatureProduct from '../components/product/FeatureProduct'
import BrandDesign from '../components/brands/BrandDesign'
import LatestProduct from '../components/product/LatestProduct'
import Footer from '../components/footer/Footer'
import {useDispatch, useSelector} from 'react-redux'
import {get_brand, get_product, get_products ,} from '../store/reducers/homeReducer'
import SecondHeroSection from '../components/second-hero-section/SecondHeroSection'
import { add_to_cart , messageClear } from '../store/reducers/cartReducer'
import {useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {models , brands ,products , latest_product} = useSelector(state => state.home)
  const { userInfo } = useSelector(state => state.auth)
  const {successMessage, errorMessage} = useSelector(state => state.cart)
 
  const activeProductsForFeature = products.filter((p) => p.status === 'active');
  const activeProductsForLatest = latest_product.filter((p) => p.status === 'active');




  const add_cart = (id) => {
    if (userInfo) {
      dispatch(add_to_cart({
        userId: userInfo.id,
        quantity: 1,
        productId: id
      }))
    } else {
      navigate('/login')
    }
  }

   useEffect(() => {
    dispatch(get_products())
    dispatch(get_brand())

   },[])




  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage)
      dispatch(messageClear())
    }
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
    }
  }, [errorMessage, successMessage])


  return (
    <div>
      
      <HeroSection/>
      <SecondHeroSection/>
      <ModelDesign data={models} />
      <FeatureProduct add_cart={add_cart}  products={activeProductsForFeature}/>
      <BrandDesign data={brands}/>
      <LatestProduct add_cart={add_cart}  data={activeProductsForLatest}/>
      <Footer/>
      
    </div>
  )
}

export default Home
