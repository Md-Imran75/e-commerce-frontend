import {Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get_wishlist_products, messageClear, remove_wishlist } from '../store/reducers/cartReducer'
import toast from 'react-hot-toast'
import Wrapper from '../components/Wrapper'
import { useEffect } from 'react'



const Wishlist = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
    const { wishlist, successMessage } = useSelector(state => state.cart)

    const remove_from_wishlist = (id) => {
      
          dispatch(remove_wishlist(id))
      }

    useEffect(() => {
        dispatch(get_wishlist_products(userInfo.id))
    }, [])
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [successMessage])

   

    return (
        <div className='lg:px-10 py-5 lg:py-10 bg-white-100'>
            <Wrapper>
                <div className='border border-background-500 px-5 py-10'>
                    <div className='mb-5 text-xl font-semibold  text-black-500'>
                        Wishlist Bikes
                    </div>
                    <div
                        className='grid grid-cols-1   grid-rows-1 h-full  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5  gap-5'
                    >
                        {wishlist?.map((item) => {
                            return (

                                <div key={item.key} className='border border-background-500'>
                                    <div className=' h-full flex flex-col'>
                                        <Link to={`/bike/details/${item.slug}`}
                                            className='flex-grow  transform  bg-white-100 hover:scale-105 cursor-pointer duration-200'
                                        >
                                            <div className='h-[150px] w-full'>
                                                <img className='h-full w-full' height={150} src={item.image} />
                                            </div>
                                            <div className=' px-2  h-[110px]  text-black-500/[0.90]'>
                                                <div className=' text-[14px] font-medium mt-5 h-[20px]'>
                                                    {item.name.length > 20 ? (`${item.name.slice(0, 20)}...`) : item.name}
                                                </div>
                                                <div className=' text-[14px] text-black-500/[0.90] my-[2px]  font-semibold'>
                                                    Brand: <span className='bg-secondary-400 text-white-100 py-[1px] px-1'>{item.brand} </span>
                                                </div>
                                                <div className=' text-[14px] h-[40px] text-black-500/[0.90] font-semibold'>
                                                    Model: {item.model}
                                                </div>
                                                <div className=' mt-1 items-center text-black-500 '>

                                                    <p className='mr-1  font-bold  text-secondary-400'>
                                                        &#2547;{item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <button onClick={() => remove_from_wishlist(item._id)}  className='w-full bg-secondary-400 py-[8px] text-white-100 mt-3  font-bold'
                                        >
                                            Remove From Wishlist
                                        </button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Wishlist
