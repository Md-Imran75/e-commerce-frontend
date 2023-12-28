import React from 'react'
import Footer from '../footer/Footer'
import { useLocation , useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Checkout = () => {
    

    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const { userInfo } = useSelector(state => state.auth)
    const { state: { products, price, booking_fee, items } } = useLocation()
    const [res, setRes] = useState(false)
    const [state, setState] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        city: "",
        thana: ""
    })
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const save = (e) => {
        e.preventDefault()
        const { name, address, email, phone, city, thana } = state;
        if (name && address && phone && city && email && thana) {
            setRes(true)
        }
    }
    const placeOrder = () => {
        // dispatch(place_order({
        //     price,
        //     products,
        //     booking_fee,
        //     shippingInfo: state,
        //     userId: userInfo.id,
        //     navigate,
        //     items
        // }))
    }

    
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
                                            <h2 className='text-black-500 font-bold text-xl pb-3'>Garage Information</h2>
                                            <form onSubmit={save}>
                                                <div className='flex md:flex- flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="name">Full Name</label>
                                                        <input onChange={inputHandle} value={state.name} type="text" className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='name' placeholder='name' id='name' required />
                                                    </div>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="email">Email</label>
                                                        <input onChange={inputHandle} value={state.email} type="email" className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='email' placeholder='email' id='email' required />
                                                    </div>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="address">Address</label>
                                                        <input onChange={inputHandle} value={state.address} type="text" className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='address' placeholder='address' id='address' required />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="phone">Phone</label>
                                                        <input onChange={inputHandle} value={state.phone} type="number" required className='w-full px-3 py-2 border border-black-200 outline-none focus:border-indigo-500 rounded-md' name='phone' placeholder='phone' id='phone' min={0} minLength={11} />
                                                    </div>
                                                   
                                                </div>
                                                <div className='flex md:flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="city">City</label>
                                                        <input onChange={inputHandle} value={state.city} type="text" className='w-full px-3 py-2 border border-black-200 outline-none  rounded-md' name='city' placeholder='city' id='city' required />
                                                    </div>
                                                </div>
                                                <div className='flex md:flex-row flex-col md:gap-2 w-full gap-5 text-black-600'>
                                                    <div className='flex flex-col gap-1 mb-2 w-full'>
                                                        <label htmlFor="thana">Thana</label>
                                                        <input onChange={inputHandle} value={state.thana} type="text" className='w-full px-3 py-2 border border-black-200 outline-none  rounded-md' name='thana' placeholder='thana' id='thana' />
                                                    </div>
                                                    
                                                </div>
                                                <div className='flex flex-col gap-1 mx-auto mt-3 w-[50%]'>
                                                        <button className='px-3 py-[6px] rounded-sm  bg-secondary-400 text-white-100'>Save</button>
                                                    </div>
                                            </form>
                                        </>
                                    }
                                    {
                                        res && <div className='flex flex-col gap-1'>
                                            <h2 className='text-black-600 font-semibold pb-2'>Deliver to {state.name}</h2>
                                            <div>
                                               <div className='md:mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                               <span className='bg-primary-200 w-full md:w-[100px] text-black-500 text-xs font-medium mr-2 px-2.5 py-1 rounded'>Adress:</span>
                                               <span className='text-black-500 text-sm'>{state.address}</span>
                                               </div>
                                                
                                                <div className='md:mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className='bg-primary-200 w-full md:w-[100px] text-black-500 text-xs font-medium mr-2 px-2.5 py-1 rounded'>City:</span>
                                                <span className='text-black-500 text-sm'>{state.city}</span>
                                                </div>

                                                <div className='md:mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className='bg-primary-200 w-full md:w-[100px] text-black-500 text-xs font-medium mr-2 px-2.5 py-1 rounded'>Thana:</span>
                                                <span className='text-black-500 text-sm'>{state.thana}</span>
                                                </div>

                                                <div className='md:mb-2 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className='bg-primary-200 w-full md:w-[100px] text-black-500 text-xs font-medium mr-2 px-2.5 py-1 rounded'>Phone:</span>
                                                <span className='text-black-500 text-sm'>{state.phone}</span>
                                                </div>

                                                <div className='mb-5 flex md:flex-row flex-col justify-start gap-1'>
                                                <span className='bg-primary-200 w-full md:w-[100px] text-black-500 text-xs font-medium mr-2 px-2.5 py-1 rounded'>Email:</span>
                                                <span className='text-black-500 text-sm'>{state.email}</span>
                                                </div>


                                                <button onClick={() => setRes(false)} className='text-white-100 bg-secondary-400 px-5 py-1 cursor-pointer'> change</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                                {
                                    products?.map((p, i) => <div key={i} className='flex bg-white p-4 flex-col gap-2'>
                                        <div className='flex justify-start items-center'>
                                            <h2 className='text-md text-black-600'>{p.shopName}</h2>
                                        </div>
                                        {
                                            p.products.map((pt, j) => <div key={i + 99} className='w-full flex flex-wrap'>
                                                <div className='flex sm:w-full gap-2 w-7/12'>
                                                    <div className='flex gap-2 justify-start items-center'>
                                                        <img className='w-[80px] h-[80px]' src={pt.productInfo.images[0]} alt="product image" />
                                                        <div className='pr-4 text-black-600'>
                                                            <h2 className='text-md'>{pt.productInfo.name}</h2>
                                                            <span className='text-sm'>Brand : {pt.productInfo.brand}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end w-5/12 sm:w-full sm:mt-3'>
                                                    <div className='pl-4 sm:pl-0'>
                                                        <h2 className='text-lg text-orange-500'>${pt.productInfo.price - Math.floor((pt.productInfo.price * pt.productInfo.discount) / 100)}</h2>
                                                        <p className='line-through'>${pt.productInfo.price}</p>
                                                        <p>-{pt.productInfo.discount}%</p>
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
                                    <h2 className='text-xl font-semibold'>Booking Summary</h2>
                                    <div className='flex gap-5 justify-between '>
                                        <span className='font-bold'>Total Bike({price})</span>
                                        <span>${price}</span>
                                    </div>
                                    <div className='flex justify-between gap-5'>
                                        <span className='font-bold'>Booking Fee:</span>
                                        <span>${booking_fee}</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='font-bold'>Total Payment</span>
                                        <span>${price + booking_fee}</span>
                                    </div>
                                    <div className='flex  justify-between items-center'>
                                        <span className='font-bold'>Total</span>
                                        <span>${price + booking_fee}</span>
                                    </div>
                                    <button onClick={placeOrder} disabled={res ? false : true} className={`px-5 py-[6px] rounded-sm  ${res ? 'bg-secondary-500' : 'bg-secondary-300'} text-sm text-white-100 uppercase`}>Confirm Order</button>
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
