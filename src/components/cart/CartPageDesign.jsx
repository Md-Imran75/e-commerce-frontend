
import React, { useMemo, useState , useEffect } from 'react'
import {useNavigate , Link} from 'react-router-dom'
import {AiFillDelete} from 'react-icons/ai'
// import { useSelector , useDispatch } from 'react-redux'
// import { userData } from '@/utils/Helper'
// import { removeFromCart } from '@/store'
import PropTypes from 'prop-types';


const CartPageDesign = ({setCartOpen}) => {
  const navigate = useNavigate()
  const {jwt} = true
  const [ userJwt , setUserJwt] = useState(true)
  useEffect(() => {
    if(jwt){
      setUserJwt(false)
    }
   }, [jwt])

//   const dispatch = useDispatch()
//   const {cart} = useSelector((state => state.cart))
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
  
  const subTotal = useMemo(() => {
    return cart.reduce((total , val) => total + val.price , 0 )
  }, [cart])

  
  const redirect = () => {
    navigate('/garage-checkout', {
      state: {
        products:[],
        price:500,
        booking_fee: 100,
        items:5
      }
    })
  }
   

  return (

    
    <div className=' z-[999999999999] w-full md:w-[350px] shadow-xl flex flex-col right-0 overflow-y-scroll h-full fixed  top-[125px] bg-background-200 '>
    
     {/* bike garage and close button add */}
    <div className='flex  flex-col' >

     <div className='flex z-50 py-2 px-4 fixed bg-white-100 w-full md:w-[350px] shadow-md justify-between'>
      <div className='text-lg  md:mr-[10px] text-neutral-400 font-bold' >Bike Garage</div>
      <div>
       <button 
       onClick={() => setCartOpen(false)}
       className='bg-secondary-400 text-white-200 px-2' >
           Close
       </button>
      </div>
     
     </div>
    </div>
    {/* bike garage and close button end */}


    {/* product data map add */}
    <div className='mt-[60px] mb-[200px]'>
        
        {
          cart.length > 0 && (
            cart.map((item , i) => (
              
            <div key={i} className=' mx-2 shadow-sm z-50 my-2 bg-primary-300 py-2 px-3'>
            <div className='flex flex-col gap-5'>

             {/* image , titile start */}
            
            <div className='flex  justify-between'>
            <div>
              <Link to={`/bike/details/${item.name}`}>
              <div className='h-[40px] w-[60px]   mr-[15px]'>
              <img
              alt={item.name}
              width={120}
              height={120}
              src={item.image}
              />
              </div>
              </Link>
            </div>
  
            <div className=' text-neutral-500 w-full font-medium leading-[18px] text-[12px]'>{item.name}</div>
            </div>
            
             {/* imag e, title end */}
            

             {/* Brand , price and delete button start */}
            <div className='flex justify-between'>
              
              <div className=' w-2/3 text-neutral-500 font-roboto font-bold  leading-[18px] text-[12px]'>
              {`Brand: ${item.model}`}
              </div>
              
            <div className='flex w-1/3 flex-col'>

            <div className='text-[13px] font-bold text-neutral-500 mx-1'> &#2547;{item.price}</div> 
            <button  className='w-full text-neutral-500 ml-auto mt-1'> <AiFillDelete/> </button>
            
            </div>
            </div>
             {/* Brand , price and delete button end */}
           
          </div>
        </div>
            
          )
        )
        ) 
        
        }


        {
          cart.length < 1 && (
            (
              <>
               <div className='mt-[100px]'>
                <img
                src={'/empty-cart.jpg'}
                height={500}
                width={500}
                alt={'empty-cart'}
                />
               </div>
              </>
            )  
          )
        }
       </div>
  
  
       {/* product data map end */}

   
   {/* checkout and subtototal add  */}

   <div className=' shadow-lg py-3 px-2 w-full md:w-[350px]  fixed bg-primary-100  flex justify-between bottom-0'>
   <div>
    { userJwt ? 
     <button onClick={redirect} className={` bg-secondary-500 py-1 text-white-200 px-[10px] `}>
           Garage Checkout
     </button>
    : 
    (
        <div>
          <button className={` cursor-not-allowed   bg-secondary-300 font-normal text-[10px] py-1 text-white-200  px-[5px] `}>
           Garage Checkout
         </button>
        <p className='text-[10px] text-neutral-500'>please login for checkout</p>
        </div> 
       )

           }
            </div>

            <div className=' text-secondary-500  flex justify-between text-[12px] gap-2 '>
               <p className='font-bold  '>Subtotal:</p>
               <p> &#2547;{subTotal} </p>
            </div>

        </div>
   {/* checkout and subtototal end  */}
  
  </div>
      
    
  )
}

{/*onClick={() => dispatch(removeFromCart({id: item.id}))*/}

export default CartPageDesign