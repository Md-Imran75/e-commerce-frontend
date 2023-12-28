
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

const Home = () => {
  
  const dispatch = useDispatch()
  const {models , brands ,products , latest_product} = useSelector(state => state.home)

   useEffect(() => {
    dispatch(get_products())
    dispatch(get_brand())

   },[])



  //  useEffect(() => {
  //   dispatch(latest_product())
  //  },[])


  return (
    <div>
      <HeroSection/>
      <SecondHeroSection/>
      <ModelDesign data={models} />
      <FeatureProduct products={products}/>
      <BrandDesign data={brands}/>
      <LatestProduct data={latest_product}/>
      <Footer/>
      
    </div>
  )
}

export default Home
