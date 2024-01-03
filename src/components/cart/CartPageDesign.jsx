
import React, {useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { get_cart_products, delete_cart_product, messageClear, quantity_inc, quantity_dec } from '../../store/reducers/cartReducer'
import { useTranslation } from 'react-i18next';


const CartPageDesign = ({ setCartOpen}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { userInfo } = useSelector(state => state.auth)
  const { cart_products, successMessage, price,  } = useSelector(state => state.cart)
  console.log(cart_products)
  const redirect = () => {
      navigate('/garage-checkout')
  }
  useEffect(() => {
      dispatch(get_cart_products(userInfo.id))
  }, [])

  useEffect(() => {
      if (successMessage) {
          dispatch(messageClear())
          dispatch(get_cart_products(userInfo.id))

      }
  }, [successMessage])

  const inc = (quantity, stock, cart_id) => {
      const temp = quantity + 1;
      if (temp <= stock) {
          dispatch(quantity_inc(cart_id))
      }
  }

  const dec = (quantity, cart_id) => {
      const temp = quantity - 1;
      if (temp !== 0) {
          dispatch(quantity_dec(cart_id))
      }
  }

  return (


    <div className=' z-[999999999999] w-full md:w-[350px] shadow-xl flex flex-col right-0 overflow-y-scroll h-full fixed  top-[125px] bg-background-200 '>

      {/* bike garage and close button add */}
      <div className='flex  flex-col' >

        <div className='flex z-50 py-2 px-4 fixed bg-white-100 w-full md:w-[350px] shadow-md justify-between'>
          <div className='text-lg  md:mr-[10px] text-neutral-400 font-bold' >{t('bikeGarage')}</div>
          <div>
            <button
              onClick={() => setCartOpen(false)}
              className='bg-secondary-400 text-white-200 px-2' >
              {t('close')}
            </button>
          </div>

        </div>
      </div>
      {/* bike garage and close button end */}


      {/* product data map add */}
      <div className='mt-[60px] mb-[200px]'>

        {
          cart_products?.length > 0  && (
            cart_products?.map((p , i) => (

              <div key={i} className='flex bg-white-100 p-2 flex-col gap-2'>
                                                
                                                {
                                                    p.products?.map((pt, i) => <div key={i} className='w-full flex flex-wrap'>
                                                        <div className='flex w-full gap-2 '>
                                                            <div className='flex gap-2 justify-start items-center'>
                                                                <img className='w-[80px] h-[80px]' src={pt.productInfo.productImages[0]} alt="product image" />
                                                                <div className='pr-4 flex-col flex text-black-500'>
                                                                    <h2 className='text-md'>{pt.productInfo.name}</h2>
                                                                    <span className='text-sm'>{t('brand')} : {pt.productInfo.brand}</span>
                                                                    <span className='text-sm'>{t('model')} : {pt.productInfo.model}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-between w-full '>
                                                            <div className='pl-4 sm:pl-0'>
                                                               
                                                                <p className='font-bold text-secondary-400'>&#2547;{pt.productInfo.price}</p>
                                                                
                                                            </div>
                                                            <div className='flex gap-2 flex-col'>
                                                                <div className='flex text-black-500 bg-primary-300 h-[30px] justify-center items-center text-xl'>
                                                                    <div onClick={() => dec(pt.quantity, pt._id)} className='px-3 cursor-pointer'>-</div>
                                                                    <div className='px-3'>{pt.quantity}</div>
                                                                    <div onClick={() => inc(pt.quantity, pt.productInfo.stock, pt._id)} className='px-3 cursor-pointer'>+</div>
                                                                </div>
                                                                <button onClick={() => dispatch(delete_cart_product(pt._id))} className='px-5 py-[3px] bg-red-500 text-white'><AiFillDelete/></button>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                }
                                            </div>)
            )
            )
          

        }


        {
          cart_products < 1 && (
            (
              <>
                <div className='mt-[100px]'>
                  <img
                    src={'http://localhost:3000/images/empty-cart.jpg'}
                    height={500}
                    width={500}
                    alt={'empty-cart'}
                  />
                </div>
                <div className='text-center p-5'>
                {t('noBikeFound')} 
                  <span className='ml-2'>{t('goToShop')} <span className='text-secondary-400 font-bold'><Link to={'/allbikes'}>{t('shop')}</Link></span></span>
                </div>
              </>
            )
          )
        }
      </div>


      {/* product data map end */}


      {/* checkout and subtototal add  */}

      <div className=' shadow-lg py-3 px-2 w-full md:w-[350px]  fixed bg-primary-100  flex justify-between bottom-0'>
        <div>
          {userInfo ?
            <button onClick={redirect} className={` bg-secondary-500 py-1 text-white-200 px-[10px] `}>
              {t('garageCheckOut')}
            </button>
            :
            (
              <div>
                <button className={` cursor-not-allowed   bg-secondary-300 font-normal text-[10px] py-1 text-white-200  px-[5px] `}>
                {t('garageCheckOut')}
                </button>
                <p className='text-[10px] text-neutral-500'>{t('loginForCheckout')}</p>
              </div>
            )

          }
        </div>

        <div className=' text-secondary-500  flex justify-between text-[12px] gap-2 '>
          <p className='font-bold  '>{t('total')}:</p>
          <p> &#2547;{price} </p>
        </div>

      </div>
      {/* checkout and subtototal end  */}

    </div>


  )
}


export default CartPageDesign