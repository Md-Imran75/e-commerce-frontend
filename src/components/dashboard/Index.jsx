import React, { useEffect } from 'react'
import { MdElectricBike,} from "react-icons/md"
import { useSelector, useDispatch } from 'react-redux'
import { get_dashboard_index_data } from '../../store/reducers/dashboardReducer'
import OrderPageDesign from './orderPageDesign/OrderPageDesign'
const Index = () => {

    const { userInfo } = useSelector(state => state.auth)
    const { totalOrder, pendingOrder, recentOrders, cancelledOrder } = useSelector(state => state.dashboard)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_dashboard_index_data(userInfo.id))
    }, [])
    
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 w-full mt-12 gap-5'>
                <div className='flex justify-center items-center p-5 border border-background-500 gap-5'>
                    <div className='bg-secondary-400 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl '>
                        <span className='text-xl text-white-500'>
                            <MdElectricBike />
                        </span>
                    </div>
                    <div className='flex flex-col justify-start items-start text-black-500'>
                        <h2 className='text-3xl font-bold'>{totalOrder}</h2>
                        <span>Orders</span>
                    </div>
                </div>
                <div className='flex justify-center items-center p-5 border border-background-500 gap-5'>
                    <div className='bg-secondary-400 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl '>
                        <span className='text-xl text-white-500'>
                            <MdElectricBike />
                        </span>
                    </div>
                    <div className='flex flex-col justify-start items-start text-black-500'>
                        <h2 className='text-3xl font-bold'>{pendingOrder}</h2>
                        <span>Pending Orders</span>
                    </div>
                </div>
                <div className='flex justify-center items-center p-5 border border-background-500 gap-5'>
                    <div className='bg-secondary-400 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl '>
                        <span className='text-xl text-white-500'>
                            <MdElectricBike />
                        </span>
                    </div>
                    <div className='flex flex-col justify-start items-start text-black-500'>
                        <h2 className='text-3xl font-bold'>{cancelledOrder}</h2>
                        <span>Cancelled Orders</span>
                    </div>
                </div>
            </div>
            <OrderPageDesign name={'Recents '} orders={recentOrders} />
        </div>
    )
}

export default Index