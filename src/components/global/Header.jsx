import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Wrapper from '../Wrapper'
import { FaList, FaUser } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { IoMenu } from "react-icons/io5";
import MobileMenu from './MobileMenu';
import { AiOutlineTwitter, AiFillGithub, AiFillHeart, AiFillShopping } from 'react-icons/ai'
import CartPageDesign from '../cart/CartPageDesign'
import { get_brand, get_model, get_product, get_products } from '../../store/reducers/homeReducer'

const Header = () => {

    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showModel, setShowModel] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')

    const [searchValue, setSearchValue] = useState('')
    const [cartOpen, setCartOpen] = useState(false)

    const { models, brands } = useSelector(state => state.home)

    useEffect(() => {
        dispatch(get_model())
    }, [])

    useEffect(() => {
        dispatch(get_brand())
    }, [])

    const user = true
    const userInfo = true
    const wishlist_count = 2

    const search = () => {
        navigate(`/bikes-brands/search?brand=${brand}&&value=${searchValue}`)
    }



    return (
        <div className='z-[9999] sticky top-0  bg-white-100  w-full'>
            <div>
                <Wrapper>
                    <div>
                        <div className='w-full h-[80px] flex  justify-between'>
                            <div className='h-[50px] w-2/12'>
                                <Link to={'/'}>
                                    <div className='w-[80px]'>
                                        <img src="http://localhost:3000/images/logo.png" alt="Logo" />
                                    </div>
                                </Link>
                            </div>

                            <div className=' w-7/12 md:visible hidden md:flex text-black-500  h-full items-center'>

                                <div className='flex w-full  bg-primary-100 text-black-500 h-[40px] items-center relative gap-5'>
                                    <div className='relative after:absolute after:h-[25px] after:w-[1px] after:bg-primary-500  after:-right-[15px] '>
                                        <select onChange={(e) => setBrand(e.target.value)} className='w-[130px] text-black-500 font-semibold px-2 h-full outline-none bg-primary-100 border-none' name="" id="">
                                            <option className='text-black-500 ' value="">Select Brand</option>
                                            {
                                                brands?.map((brand) => <option className='text-black-500 ' key={brand.slug} value={brand.name}>{brand.name}</option>)
                                            }
                                        </select>
                                    </div>
                                    <input className='w-full relative bg-primary-100  text-black-500 outline-none px-3 h-full' onChange={(e) => setSearchValue(e.target.value)} type="text" name="" id="" placeholder='search...' />
                                    <button onClick={search} className='bg-secondary-400 text-white-100 right-0 absolute px-2 h-full font-semibold uppercase'>Search</button>
                                </div>
                            </div>

                            <div className=' w-10/12 md:w-3/12 flex items-center'>
                                <div className='flex ml-auto'>
                                    {
                                        user ?
                                            <>
                                                <Link to={'/dashboard'}>
                                                    <div className='flex mx-auto justify-start'>
                                                        <div className='flex gap-2 items-center'>
                                                            <span className='text-[20px]'><FaUser /></span>
                                                            <span className='text-md font-bold'>Md Imran Khan </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </> :
                                            <>
                                                <div>
                                                    <button className='bg-secondary-400 px-4 text-white-100 rounded-sm py-[3px]'>Login</button>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>

                <div>
                    <div className='w-full bg-secondary-400'>

                        <Wrapper>
                            <div className=' text-white-100 h-[50px]   items-center  flex justify-between'>
                                <div className='md:w-6/12 w-full md:block flex justify-between items-center'>
                                    <div className='flex  text-sm'>
                                        <div onClick={() => {
                                            setShowModel(!showModel)
                                            setShowMobileMenu(false)
                                        }} className='flex justify-between items-center uppercase font-bold cursor-pointer gap-2'>
                                            <span><FaList /></span>
                                            <span>All Model</span>
                                        </div>

                                        <div className='absolute z-[9999999] h-auto text-black-500  top-[130px] w-[250px]'>
                                            {
                                                showModel ?
                                                    <>
                                                        <div className='bg-white-100 overflow-y-auto shadow-lg  py-3'>
                                                            {
                                                                models?.map((model) => (
                                                                    <>
                                                                        <Link to={`/bikes?model=${model.name}`}>

                                                                            <div className='overflow-y-auto' key={model.slug}>
                                                                                <li className='list-none flex justify-between hover:bg-primary-100 py-1 items-center px-3 cursor-pointer text-sm m-1'>
                                                                                    <div>
                                                                                        <img className='w-[30px] h-[30px]' src={model?.image} alt="" />
                                                                                    </div>
                                                                                    <div>{model?.name}</div>

                                                                                </li>
                                                                            </div>
                                                                        </Link>

                                                                    </>
                                                                ))
                                                            }
                                                        </div>
                                                    </> : ''
                                            }
                                        </div>


                                    </div>

                                    <div className='flex md:hidden justify-center items-center gap-5'>
                                        <div className='flex justify-center gap-5'>
                                            <div onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full bg-white-500'>
                                                <span className='text-xl text-secondary-500'><AiFillHeart /></span>
                                                {
                                                    wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-primary-500 rounded-full text-black-500 flex justify-center items-center -top-[3px] -right-[5px]'>
                                                        {wishlist_count}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    {cartOpen && <CartPageDesign setCartOpen={setCartOpen} />}

                                    <div className='flex md:hidden justify-center items-center gap-5'>
                                        <div className='flex justify-center gap-5'>
                                            <div onClick={() => setCartOpen(!cartOpen)} className='relative flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full bg-white-500'>
                                                <span className='text-xl text-secondary-500'><BsCart /></span>
                                                {
                                                    wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-primary-500 rounded-full text-black-500 flex justify-center items-center -top-[3px] -right-[5px]'>
                                                        {wishlist_count}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>


                                    <div className='md:hidden'>
                                        <div onClick={() => {
                                            setShowMobileMenu(!showMobileMenu)
                                            setShowModel(false)
                                        }} className='flex cursor-pointer items-center gap-2 text-sm'>
                                            <span className='text-[20px]'><IoMenu /></span>
                                        </div>

                                    </div>
                                </div>



                                <div className='md:flex md:w-6/12 font-bold uppercase justify-start  md:visible hidden  text-xs md:text-sm   gap-5 '>
                                    <div className={`${pathname === '/' ? 'border-b-2 border-primary-500' : ''}`}><Link to={'/'}>Home</Link></div>
                                    <div className={`${pathname === '/allbikes' ? 'border-b-2 border-primary-500' : ''}`}><Link to={'/allbikes'}>All Bike</Link></div>
                                    <div className={`${pathname === '/about' ? 'border-b-2 border-primary-500' : ''}`}><Link to={'/about'}>About</Link></div>
                                    <div className={`${pathname === '/privacy-policy' ? 'border-b-2 border-primary-500' : ''}`}><Link to={'/privacy-policy'}>Privacy Policy</Link></div>
                                </div>
                            </div>
                        </Wrapper>

                    </div>
                    <div className='md:hidden'>
                        {
                            showMobileMenu ? <><div className='z-50'><MobileMenu setShowMObileMenu={setShowMobileMenu} /></div></> : ''
                        }
                    </div>
                    <div className=' w-full  shadow-sm md:hidden text-black-500'>

                        <div className='flex w-full  bg-primary-100 text-black-500 h-[40px] items-center relative gap-5'>

                            <input className='w-full  relative bg-primary-100  text-black-500 outline-none px-5 h-full' onChange={(e) => setSearchValue(e.target.value)} type="text" name="" id="" placeholder='search...' />
                            <button onClick={search} className='bg-primary-200 text-black-500 right-0 absolute px-2 h-full font-semibold uppercase'>Search</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
