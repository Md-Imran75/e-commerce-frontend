import { Link, useLocation } from 'react-router-dom'


const MobileMenu = ({ setShowMObileMenu }) => {
    const { pathname } = useLocation()
    return (
        <div className='overflow-y-auto  flex justify-between  '>
            <div>
                <div className='flex overflow-y-auto fixed z-50 transition-all duration-200 shadow-lg  bg-background-100  h-screen w-8/12 flex-col py-5  text-sm text-black-500 font-normal '>


                    <div className={`px-3 py-1 ${pathname === '/' ? 'bg-primary-100 ' : ''}`}><Link to={'/'}>Home</Link></div>
                    <div className={`px-3 py-1 ${pathname === '/allbikes' ? 'bg-primary-100 ' : ''}`}><Link to={'/allbikes'}>All Bike</Link></div>
                    <div className={`px-3 py-1 ${pathname === '/about' ? 'bg-primary-100 ' : ''}`}><Link to={'/about'}>About</Link></div>
                    <div className={`px-3 py-1 ${pathname === '/privacy-policy' ? 'bg-primary-100 ' : ''}`}><Link to={'/privacy-policy'}>Privacy Policy</Link></div>


                </div>
            </div>
            <div onClick={() => setShowMObileMenu(false)} className='h-screen  w-4/12'>
                {/* do not write here anything */}
            </div>
        </div>
    )
}

export default MobileMenu
