
import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import BikeDetailsPageCarousel from '../components/product/BikeDetailsPageCarousel'
import RelatedProductCarousel from '../components/product/RelatedProductCarousel'
import Footer from "../components/footer/Footer"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get_product } from '../store/reducers/homeReducer'
import { add_to_cart, messageClear, add_to_wishlist } from '../store/reducers/cartReducer'
import toast from 'react-hot-toast'

const BikeDetailsPage = ({ params }) => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { product, relatedProducts,} = useSelector(state => state.home)
  const { userInfo } = useSelector(state => state.auth)
  const { errorMessage, successMessage } = useSelector(state => state.cart)


  const [quantity, setQuantity] = useState(1)


  const add_cart = () => {
      if (userInfo) {
          dispatch(add_to_cart({
              userId: userInfo.id,
              quantity,
              productId: product._id
          }))
      } else {
          navigate('/login')
      }
  }

  const add_wishlist = () => {
      if (userInfo) {
          dispatch(add_to_wishlist({
              userId: userInfo.id,
              productId: product._id,
              name: product.name,
              price: product.price,
              image: product.productImages[0],
              slug: product.slug,
              model: product.model,
              brand: product.brand
          }))
      } else {
          navigate('/login')
      }

  }

  useEffect(() => {
      dispatch(get_product(slug))
  }, [slug])
  useEffect(() => {
      if (errorMessage) {
          toast.error(errorMessage)
          dispatch(messageClear())
      }
      if (successMessage) {
          toast.success(successMessage)
          dispatch(messageClear())
      }
  }, [errorMessage, successMessage])

  

  

  return (
    <div>
        <div className="w-full mt-[30px]   md:my-0 md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10  gap-[50px] lg:gap-[100px] ">
          {/* left coloum start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
            <BikeDetailsPageCarousel data={product?.productImages} />
          </div>
          {/* left coloum End */}


          {/* right coloum start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[25px] text-neutral-500  font-medium mb-2 leading-tight">
              {product?.name}
            </div>

            {/* product price */}
            <div className="text-lg text-neutral-500 font-semibold ">
              Price: {product?.price} BDT
            </div>

            <div className="flex md:flex-row flex-col mt-5  justify-between">
              {/* brand */}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 border  border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Brand:{product?.brand}
            </div>

            {/* Model */}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Model: {product?.model}
            </div>
            </div>



            <div className="flex md:flex-row flex-col justify-between">
              {/* seller Id */}

            <div className="text-[12px] md:text-md my-1 md:mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Seller Id: {product?.ml}
            </div>

            {/* cc */}

            <div className="text-[12px] md:text-md my-1 font-medium py-1 border border-background-500 px-1 text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              CC: {product?.abs}
            </div>
            </div>



           <div className="flex md:flex-row flex-col justify-between">
             {/* fl */}

             <div className="text-[12px] md:text-md my-1 md:mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Fl: {product?.fi}
            </div>

            {/* reg year */}

            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Reg Year: {product?.regYear}
            </div>
           </div>




            <div className="flex md:flex-row flex-col justify-between">
              {/* kelo metter */}

            <div className="text-[12px] md:text-md my-1 md:mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              K. Meter: {product?.brand}
            </div>

            {/* taxt Valid */}

            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              Tax Valid: {product?.taxValid}
            </div>
            </div>

            <div className="mb-10">

               {/* condition */}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              Condition: {product?.model}
            </div>

            {/* abs */}

            
            </div>


            

            {/* Add to button Add */}

            <div className="flex justify-between mb-10">
              <button
                className="w-[180px] h-[50px] mr-2 py-1 md:py-2 rounded-md lg:mr-5 xl:mr-[0] bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500"
                onClick={add_cart}
              >
                Add to Garage
              </button>

              {/* Add to button end */}

              {/* Add to wishlist add */}

              <button onClick={add_wishlist} className="w-[180px] h-[50px] py-1  md:py-2 rounded-md bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500  ">
                Add to Wishlist
              </button>
            </div>

            {/* Add to wishlist end */}

            {/* Product description Add */}
            <div>
              <div className="text-lg font-bold mb-5">
                Bike Details
              </div>

              <div className="markdown text-md mb-5 ">
                {product?.description}
              </div>
            </div>
            {/* Product description Add */}
          </div>
          {/* right coloum end */}
        </div>

        {/* related product curousel */}
        <div className="border-background-500 border px-5 py-10 mt-10">
          <RelatedProductCarousel add_cart={add_cart} products={relatedProducts} />
        </div>
        {/* related product curousel */}
      </Wrapper>

    </div>

    <Footer/>

    </div>
  );
};

export default  BikeDetailsPage;
