import { Link} from 'react-router-dom'


const OrderPageDesign = ({orders , name}) => {
  return (
    <div>
      <div className=' p-4  rounded-md'>
                <h2 className='text-lg font-semibold text-black-500'>{name} Orders</h2>
                <div className='pt-4'>
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-left text-black-500'>
                            <thead className='text-xs text-black-700 uppercase'>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>Order Id</th>
                                    <th scope='col' className='px-6 py-3'>Price</th>
                                    <th scope='col' className='px-6 py-3'>Payment status</th>
                                    <th scope='col' className='px-6 py-3'>Order status</th>
                                    <th scope='col' className='px-6 py-3'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map((o, i) => <tr key={i} className=' border-b'>
                                        <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o._id}</td>
                                        <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>BDT {o.price}</td>
                                        <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o.payment_status}</td>
                                        <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o.delivery_status}</td>
                                        <td scope='row' className='px-6 py-4'>
                                            <Link to={`/dashboard/order/details/${o._id}`}>
                                                <span className=' text-green-800 text-sm font-normal mr-2 px-2.5 py-[1px] rounded'>view</span>
                                            </Link>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OrderPageDesign
