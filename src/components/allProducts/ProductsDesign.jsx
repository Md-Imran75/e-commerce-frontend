import React from 'react'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { add_to_cart , messageClear , add_to_wishlist} from '../../store/reducers/cartReducer'
import {useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useTranslation } from 'react-i18next';


const ProductsDesign = ({ products , filter }) => {

    const { t } = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
  const {successMessage, errorMessage} = useSelector(state => state.cart)




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

  console.log(products)

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

  const add_wishlist = (pro) => {
   if(userInfo){
    dispatch(add_to_wishlist({
      userId: userInfo.id,
      productId: pro._id,
      name: pro.name,
      price: pro.price,
      model: pro.model,
      brand: pro.brand,
      image: pro.productImages[0],
      slug: pro.slug
  }))
   }else{
    navigate('/login')
   }
}


    return (
       <div className='mx-5'>
         <div className={`w-full  grid grid-cols-1 md:grid-cols-3 ${filter ? ' md:grid-cols-3' : 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 '} gap-3`}>
            {
                 products?.map((p) => 
                 
                 <div key={p.slug} className={`flex transition-all duration-1000  flex-col justify-start items-start w-full gap-4 border border-background-500 p-1 rounded-md`}>
                    <div className={`w-full relative group  overflow-hidden`}>
                        <img className='h-[150px] rounded-md   w-full object-cover' src={p.productImages[0]} alt={p.productImages[0].name} />
                        <ul className='flex transition-all duration-700 bottom-3 justify-center items-center gap-2 absolute w-full '>
                            <li onClick={() => add_wishlist(p)} className='w-[30px] h-[30px] cursor-pointer bg-secondary-400 flex justify-center items-center 
                            text-white-100
                            rounded-full   transition-all'><AiFillHeart /></li>
                            <Link className='w-[30px] h-[30px] cursor-pointer bg-secondary-400 flex justify-center items-center 
                            text-white-100
                            rounded-full   transition-all' to={`/bike/details/${p.slug}`}><FaEye /></Link>
                            <li onClick={() => add_cart(p._id)} className='w-[30px] h-[30px] cursor-pointer bg-secondary-400 flex justify-center items-center 
                            text-white-100
                            rounded-full   transition-all'><AiOutlineShoppingCart /></li>
                        </ul>
                    </div>
                    <div className='flex ml-2 mb-2 justify-start items-start flex-col gap-1'>
                        <h2 className='text-md text-black-500 font-medium'> 
                      {t('model')}: {p.model}</h2>
                        <div className='flex justify-start items-center gap-2'>
                        {t('brand')}: 
                            <span className='text-md text-black-500 font-semibold'>{p.brand}</span>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <span className='text-md  font-bold text-black-500'>&#2547;{p.price}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
       </div>
    )
}

export default ProductsDesign