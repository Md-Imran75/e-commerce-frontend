import Footer from '../components/footer/Footer'
import { Link, useLocation } from 'react-router-dom'
const SucessOrder = () => {
    const {state:{items , orderId , price}} = useLocation()
    console.log(items , orderId , price)
  return (
    <div className='my-10'>
        <section className='px-5 text-center'>
         <div>
            <div className='text-xl text-center font-semibold text-secondary-400'>Congratulation for your new Bike</div>
            <div className='text-lg text-center font-normal'>Thanks for your order</div>
         </div>
         <div>
             <div className='flex mt-10 flex-col items-center'>
                  <div> <span className='font-semibold'>Order Id:</span> {orderId}</div>
                  <div> <span className='font-semibold'>Total Price:</span> {price} BDT </div>
                  <div><span className='font-semibold'>Total Bike ordered:</span> {items} Bike</div>
             </div>
         </div>

         <div className='mt-10'>
            Back to buy more bike <Link to={'/allbikes'}><span className='font-bold text-secondary-400'>See All Bike</span></Link>
         </div>
        </section>
       <Footer/>
    </div>
  )
}

export default SucessOrder
