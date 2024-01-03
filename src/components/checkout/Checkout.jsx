import React from 'react'
import Footer from '../footer/Footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {place_order , messageClear} from '../../store/reducers/orderReducer'
import {get_cart_products} from '../../store/reducers/cartReducer'
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast'


const Checkout = () => {
    
    const { t } = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
    const { cart_products,  price, buy_product_item, booking_fee, } = useSelector(state => state.cart)
    const {successMessage , errorMessage} = useSelector(state => state.order)


    const [res, setRes] = useState(false)
    const [state, setState] = useState({
        name: '',
        address: '',
        phone: '',
        email:'',
        city: '',
        thana: ''
    })
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const save = (e) => {
        e.preventDefault()
        const { name, address, phone, email,  city, thana } = state;
        if (name && address && phone && thana && email && city) {
            setRes(true)
        }
    }
    const placeOrder = () => {
        dispatch(place_order({
            price,
            products: cart_products,
            booking_fee,
            shippingInfo: state,
            userId: userInfo.id,
            navigate,
            items: buy_product_item
        }))
    }

    
   useEffect(() => {
    dispatch(get_cart_products())

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
      <div>
      <section className='bg-white-100'>
                <div className='w-[85%] lg:w-[70%] md:w-[90%] sm:w-[100%] mx-auto py-16'>
                    <div className='w-full flex flex-wrap'>
                        <div className='md:w-[67%] w-full'>
                            <div className="flex flex-col gap-3">
                                <div className="bg-white-500 border border-background-500 p-6 shadow-sm rounded-md">
                                    {
                                        !res && <>
                                            <h2 className='text-black-500 font-bold text-xl pb-3'>{t('garageInformation')}</h2>
                                            <form onSubmit={save}>
                                                <div className='flex md:flex- flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="name">{t('fullName')}</label>
                                                        <input onChange={inputHandle} value={state.name} type="text" className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='name' placeholder='name' id='name' required />
                                                    </div>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="email">{t('email')}</label>
                                                        <input onChange={inputHandle} value={state.email} type="email" className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='email' placeholder='email' id='email' required />
                                                    </div>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="address">{t('address')}</label>
                                                        <input onChange={inputHandle} value={state.address} type="text" className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='address' placeholder='address' id='address' required />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="phone">{t('phone')}</label>
                                                        <input onChange={inputHandle} value={state.phone} type="number" required className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='phone' placeholder='phone' id='phone' min={0} minLength={11} />
                                                    </div>
                                                   
                                                </div>
                                                <div className='flex md:flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="city">{t('city')}</label>
                                                        <input onChange={inputHandle} value={state.city} type="text" className='w-full px-3 py-2 border border-black-200 outline-none  rounded-md' name='city' placeholder='city' id='city' required />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="thana">{t('thana')}</label>
                                                        <input onChange={inputHandle} value={state.thana} type="text" className='w-full px-3 py-2 border border-black-200 outline-none  rounded-md' name='thana' placeholder='thana' id='thana' />
                                                    </div>
                                                    
                                                </div>
                                                <div className='flex flex-col gap-1 mx-auto mt-3 w-[50%]'>
                                                        <button className='px-3 py-[6px] rounded-sm  bg-secondary-400 text-white-100'>{t('save')}</button>
                                                    </div>
                                            </form>
                                        </>
                                    }
                                    {
                                        res && <div className='flex flex-col gap-1'>
                                            <h2 className='text-black-600 font-semibold pb-2'>{t('deliveryTo')} {state.name}</h2>
                                            <div>
                                               <div className='mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                               <span className=' w-full md:w-[100px] text-black-500 text-xs font-bold mr-2 px-2.5 py-1 rounded'>{t('address')}:</span>
                                               <span className='text-black-500 bg-primary-200 p-1 mb-1 text-sm'>{state.address}</span>
                                               </div>
                                                
                                                <div className='mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className=' w-full md:w-[100px] text-black-500 text-xs font-bold mr-2 px-2.5 py-1 rounded'>{t('city')}:</span>
                                                <span className='text-black-500 bg-primary-200 p-1 mb-1 text-sm'>{state.city}</span>
                                                </div>

                                                <div className='mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className='w-full md:w-[100px] text-black-500 text-xs font-bold mr-2 px-2.5 py-1 rounded'>{t('thana')}:</span>
                                                <span className='text-black-500 bg-primary-200 p-1 mb-1 text-sm'>{state.thana}</span>
                                                </div>

                                                <div className='mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className=' w-full md:w-[100px] text-black-500 text-xs font-bold mr-2 px-2.5 py-1 rounded'>{t('phone')}:</span>
                                                <span className='text-black-500 bg-primary-200 p-1 mb-1 text-sm'>{state.phone}</span>
                                                </div>

                                                <div className='mb-5 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className=' w-full md:w-[100px] text-black-500 text-xs font-bold mr-2 px-2.5 py-1 rounded'>{t('email')}:</span>
                                                <span className='text-black-500 bg-primary-200 p-1 mb-1 text-sm'>{state.email}</span>
                                                </div>


                                                <button onClick={() => setRes(false)} className='text-white-100 bg-secondary-400 px-5 py-1 cursor-pointer'>{t('change')}</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className='text-xl mt-10 text-black-500 font-bold'>{t('garageBike')}:</div>
                                {
                                    cart_products?.map((p) => <div key={p.sellerId} className='flex   bg-primary-300 p-4 flex-col gap-2'>
                                        {
                                            p.products?.map((pt) => <div key={pt._id} className='w-full flex flex-wrap '>
                                                <div className='flex w-full gap-2 '>
                                                    <div className='flex gap-2 md:flex-row flex-col justify-start items-center'>
                                                        <img className='w-[100px] h-[70px]' src={pt.productInfo.productImages[0]} alt="product image" />
                                                        <div className='pr-4 flex flex-col text-black-500'>
                                                            <h2 className='text-md mb-2'>{pt.productInfo.name}</h2>
                                                            <span className='text-sm'><span className='font-bold'>{t('brand')}</span> : {pt.productInfo.brand}</span>
                                                            <span className='text-sm'><span className='font-bold'>{t('model')}</span> : {pt.productInfo.model}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-start w-full mt-3'>
                                                    <div className='pl-4 font-bold text-secondary-400'>
                                                        <p><span className='text-black-500'>{t('price')}: </span> &#2547;{pt.productInfo.price}</p>
                                                    </div>
                                                    <div className='pl-4 font-bold text-black-500'>
                                                        <p>{t('quantity')}: {pt.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className='md:w-[33%] md:mt-0 mt-5 w-full'>
                            <div className="pl-3 md-lg:pl-0">
                                <div className='bg-white-100 font-medium p-5 text-black-500 flex flex-col gap-3'>
                                    <h2 className='text-xl font-semibold'>{t('orderSummary')}</h2>
                                    <div className='flex gap-5 justify-between '>
                                        <span className='font-bold'>{t('total')} {t('bike')}({buy_product_item})</span>
                                        <span>&#2547;{price}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-between'>
                                        <span className='font-bold'>{t('bookinhFee')}:</span>
                                        <span>&#2547;{booking_fee}</span>
                                        </div>
                                        <div className='text-xs text-secondary-400 font-bold'>{t('refund')}</div>

                                        
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='font-bold'>{t('payable')}</span>
                                        <span>&#2547;{booking_fee}</span>
                                    </div>
                                    <div className='flex  justify-between items-center'>
                                        <span className='font-bold'>{t('total')}</span>
                                        <span>&#2547;{price}</span>
                                    </div>
                                    <div className='flex  justify-between items-center'>
                                        <span className='font-bold'>{t('due')}</span>
                                        <span>&#2547;{price - booking_fee}</span>
                                    </div>
                                    <button onClick={placeOrder} disabled={res ? false : true} className={`px-5 py-[6px] rounded-sm  ${res ? 'bg-secondary-500' : 'bg-secondary-300'} text-sm text-white-100 uppercase`}>{t('confirmOrder')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout
