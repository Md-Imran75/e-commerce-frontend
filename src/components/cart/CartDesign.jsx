import { useState , useMemo } from 'react'
import CartPageDesign from './CartPageDesign'
import { BsCart } from 'react-icons/bs'
// import { useSelector } from 'react-redux'

const CartDesign = () => {
  const [cartOpen , setCartOpen] = useState(false)
//   const {cart} = useSelector((state => state.cart))
  
//   const subTotal = useMemo(() => {
//     return cart.reduce((total , val) => total + val.attributes.price , 0 )
//   }, [cart])

const cart = [
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 110,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 650,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 850,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 480,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 350,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 250,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 1050,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 4565,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
]


  return (
   <div>
     <div
    className=' z-20 absolute invisible md:visible md:fixed right-0 top-80 h-[110px] font-extrabold cursor-pointer  text-primary-100  rounded-sm shadow-md w-[100px] bg-secondary-500'
    onClick={() => setCartOpen(!cartOpen)}
    >

        <div className='mt-3 ml-9 text-2xl'>
           <BsCart/> 
        </div>
        
        <div className='text-sm mt-3 px-1  text-secondary-400 bg-primary-400'>
        <div className='ml-3' >

        <div>
        {cart.length < 1 && 
         <div>
          {`0 Bike`}
         </div>
         } 

         {cart.length === 1 && 
          <div>
             <div>
          {`${cart.length} Bike`}
         </div>
         </div>
         } 
         {cart.length > 1 && 
         <div>
         <div>
          {`${cart.length} Bikes`}
         </div>
          </div>
         }
        </div>
        
        </div>
        </div>

        <div className='text-sm mt-3 px-1  text-secondary-500 bg-primary-400'>
        <p className='ml-3 text-[8px]' >
           &#2547;100
        </p>
        </div>
        </div>
       
        {/* Cart add */}

          { cartOpen && <CartPageDesign setCartOpen={setCartOpen} />}


   </div>
    
  )
}

export default CartDesign