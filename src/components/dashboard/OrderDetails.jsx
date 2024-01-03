import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get_order } from '../../store/reducers/orderReducer'

const OrderDetails = () => {

    const { orderId } = useParams()
    const dispatch = useDispatch()
    const { myOrder } = useSelector(state => state.order)
    const { userInfo } = useSelector(state => state.auth)
    console.log(myOrder)
    useEffect(() => {
        dispatch(get_order(orderId))
    }, [orderId])

    return (
        <div className='mt-10 text-black-500'>
            <div className='flex lg:flex-row flex-col justify-start gap-20'>


                <div className='flex'>

                     <div className='bg-primary-100 px-5 py-5 border border-background-500'>
                        
                        <div><span className='font-bold'>Order Id:</span>  #{myOrder?._id}</div>
                        <div><span className='font-bold'>Date:  </span>  {myOrder?.date}</div>
                        <div><span className='font-bold'>Price:  </span>  {myOrder?.price} BDT</div>
                        <div className='flex flex-col'>
                            <div className='mt-5 mb-2 text-lg font-semibold'>Shipping Info:</div>
                        <div><span className='font-bold'>Name:  </span>  {myOrder?.shippingInfo?.name}</div>
                        <div><span className='font-bold'>Adress:  </span>  {myOrder?.shippingInfo?.address}</div>
                        <div><span className='font-bold'>City:  </span>  {myOrder?.shippingInfo?.city}</div>
                        <div><span className='font-bold'>Phone:  </span>  {myOrder?.shippingInfo?.phone}</div>
                        <div><span className='font-bold'>Email:  </span>  {myOrder?.shippingInfo?.email}</div>
                        <div><span className='font-bold'>Thana:  </span>  {myOrder?.shippingInfo?.thana}</div>
                        <div><span className='font-bold mt-5'>Delivery Status:  </span>  {myOrder?.delivery_status}</div>
                        <div><span className='font-bold mt-5'>Payment Status:  </span>  {myOrder?.payment_status}</div>

                     </div>
                </div>
                </div>




                <div>
                <div>
                    <div className='text-lg'>Bikes: </div>
                        <div>
                            {myOrder?.products?.map((item , i) => (
                                <>
                                <div className='mt-5' key={i}>
                                   <div className='flex lg:flex-row gap-5 flex-col'>
                                     <div>
                                     <img className='w-[100px] h-[100px]' src={item.productImages[0]} alt="product images" />
                                     </div>
                                     <div>
                                    <div>{item.name}</div>
                                    <div>Brand: {item.brand}</div>
                                    <div>Model: {item.model}</div>
                                    <div>Price: {item.price}</div>
                                     </div>
                                   </div>
                                </div>
                                </>
                            ))}
                        </div>
                     </div>


                </div>
            </div>
        </div>
    )
}

export default OrderDetails