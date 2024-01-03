import { useState , useMemo } from 'react'
import CartPageDesign from './CartPageDesign'
import { useSelector } from 'react-redux'
import { MdElectricBike,} from "react-icons/md"
import { useTranslation } from 'react-i18next';

const CartDesign = () => {

  const { t } = useTranslation()

  const [cartOpen , setCartOpen] = useState(false)
  const { cart_product_count , price} = useSelector(state => state.cart)
  
  



  return (
   <div>
     <div
    className=' z-20 absolute invisible md:visible md:fixed right-0 top-80 h-[110px] font-extrabold cursor-pointer  text-primary-100  rounded-sm shadow-md w-[100px] bg-secondary-500'
    onClick={() => setCartOpen(!cartOpen)}
    >

        <div className='mt-3 ml-9 text-2xl'>
           <MdElectricBike/> 
        </div>
        
        <div className='text-sm mt-3 px-1  text-secondary-400 bg-primary-400'>
        <div className='ml-3' >

        <div>
        {cart_product_count < 1 && 
         <div>
           0 {t('bike')}
         </div>
         } 

         {cart_product_count === 1 && 
          <div>
             <div>
          {`${cart_product_count} ${t('bike')}`}
         </div>
         </div>
         } 
         {cart_product_count > 1 && 
         <div>
         <div>
          {`${cart_product_count} ${t('bike')}s`}
         </div>
          </div>
         }
        </div>
        
        </div>
        </div>

        <div className='text-sm mt-3 px-1  text-secondary-500 bg-primary-400'>
        <p className='ml-3 text-[8px]' >
           &#2547;{price}
        </p>
        </div>
        </div>
       
        {/* Cart add */}

          { cartOpen && <CartPageDesign setCartOpen={setCartOpen} />}


   </div>
    
  )
}

export default CartDesign