import Wrapper from '../Wrapper'
import { MdElectricBike, MdPayments, MdOutlineSupportAgent } from "react-icons/md";
import { IoDocumentSharp } from "react-icons/io5";

const SecondHeroSection = () => {
  return (
    <div className='my-10 bg-white-100'>
       <Wrapper>
       <div className='flex md:flex-row flex-col justify-between gap-5'>
        <div className='border md:w-3/12 border-background-500 bg-primary-300 text-black-500'>
            <div className='font-bold gap-4 px-5 py-5 flex  items-center'>
                <div className='text-[40px]'><MdElectricBike/></div>
                   <div>
                       A trusted bike selling platform
                    </div>            
            </div>
        </div>
        <div className='border md:w-3/12 border-background-500 bg-primary-300 text-black-500'>
            <div className='font-bold gap-4 px-5 py-5 flex  items-center'>
                <div className='text-[40px]'><IoDocumentSharp/></div>
                   <div>
                       Full secure documents
                    </div>            
            </div>
        </div>
        <div className='border md:w-3/12 border-background-500 bg-primary-300 text-black-500'>
            <div className='font-bold gap-4 px-5 py-5 flex  items-center'>
                <div className='text-[40px]'><MdPayments/></div>
                   <div >
                       Secure payment
                    </div>            
            </div>
        </div>
        <div className='border md:w-3/12 border-background-500 bg-primary-300 text-black-500'>
            <div className='font-bold gap-4 px-5 py-5 flex  items-center'>
                <div className='text-[40px]'><MdOutlineSupportAgent/></div>
                   <div >
                       After sell support
                    </div>            
            </div>
        </div>

       </div>
       </Wrapper>
    </div>
  )
}

export default SecondHeroSection
