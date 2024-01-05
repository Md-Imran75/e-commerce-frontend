import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FaList } from 'react-icons/fa'
import { RxDashboard } from 'react-icons/rx'
import { RiProductHuntLine } from 'react-icons/ri'
import { BsChat, BsHeart } from 'react-icons/bs'
import { TfiLock } from 'react-icons/tfi'
import { BiLogInCircle } from 'react-icons/bi'
import api from '../api/api'
import { useDispatch } from 'react-redux'
import { user_reset } from '../store/reducers/authReducer'
import { reset_count } from '../store/reducers/cartReducer'
import Wrapper from '../components/Wrapper'

const Dashboard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [filterShow, setFilterShow] = useState(true)

    const logout = async () => {
        try {
            const { data } = await api.get('/customer/logout')
            localStorage.removeItem('customerToken')
            dispatch(user_reset())
            dispatch(reset_count())
            navigate('/login')
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate('/login');
            } else {
                navigate('/error');
            }
        }
    }
    return (
         <div>
        <div className='xl:flex-row flex-col flex'>
         
         <div className='xl:flex-row flex flex-col mt-5'>
                <div className='xl:hidden block ml-9 pt-5'>
                    <div>
                        <button onClick={() => setFilterShow(!filterShow)} className='text-center py-3 px-3 bg-primary-300 text-black-500'>
                            <FaList />
                        </button>
                    </div>
                </div>

                <div className='h-full'>
                    <div className='py-5  flex lg:flex-row flex-col w-full mx-auto relative'>
                        <div>
                            {filterShow && <div className={` rounded-md z-50  ${filterShow ? '-left-4' : '-left-[360px]'} w-[270px] ml-4 bg-white`}>
                                <ul className='py-2 text-black-500 px-4'>
                                    <li className='flex justify-start items-center gap-2 py-2'>
                                        <span className='text-xl'><RxDashboard /></span>
                                        <Link to='/dashboard' className='block'>Dashboard</Link>
                                    </li>
                                    <li className='flex justify-start items-center gap-2 py-2'>
                                        <span className='text-xl'><RiProductHuntLine /></span>
                                        <Link to='/dashboard/my-orders' className='block'>My Orders</Link>
                                    </li>
                                    <li className='flex justify-start items-center gap-2 py-2'>
                                        <span className='text-xl'><TfiLock /></span>
                                        <Link to='/dashboard/profile' className='block'>Profile</Link>
                                    </li>

                                    <li className='flex justify-start items-center gap-2 py-2'>
                                        <span className='text-xl'><TfiLock /></span>
                                        <Link to='/dashboard/change-password' className='block'>Change Password</Link>
                                    </li>
                                    <li onClick={logout} className='flex justify-start items-center gap-2 py-2 cursor-pointer'>
                                        <span className='text-xl'><BiLogInCircle /></span>
                                        <div className='block'>Logout</div>
                                    </li>
                                </ul>
                            </div>}
                        </div>
                       
                    </div>
                </div>

            </div>
            <div className='w-full'>
                            <div className='mx-4'>
                                <Outlet />
                            </div>
                        </div>
         
           
        </div>
        <Footer />
        </div>
    )
}

export default Dashboard