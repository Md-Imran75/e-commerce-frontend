import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get_orders } from '../../store/reducers/orderReducer'
import OrderPageDesign from './orderPageDesign/OrderPageDesign'

const MyOrders = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
    const { myOrders, order } = useSelector(state => state.order)
    const [state, setState] = useState('all')


    useEffect(() => {
        dispatch(get_orders({ status: state, customerId: userInfo.id }))
    }, [state])
  return (
    <div>
      <OrderPageDesign name={'My'} orders={myOrders} />
    </div>
  )
}

export default MyOrders
