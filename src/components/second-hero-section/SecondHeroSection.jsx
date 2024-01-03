import Wrapper from '../Wrapper'
import { MdElectricBike, MdPayments, MdOutlineSupportAgent } from "react-icons/md";
import { IoDocumentSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const SecondHeroSection = () => {
  const { t } = useTranslation()

  return (
    <div className='my-10 bg-white-100'>
       <Wrapper>
       <div className='grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-5'>

        <div className='border md:flex-row flex flex-col  border-background-500 bg-background-100 text-black-400'>
            <div className=' font-semibold gap-4 md:px-5 md:py-5 md:flex-row flex flex-col  items-center'>
                <div className='text-[40px]'><MdElectricBike/></div>
                   <div className='text-center'>
                   {t('trustedBikeSeling')}
                    </div>            
            </div>
        </div>
        <div className='border md:flex-row flex flex-col  border-background-500 bg-background-100 text-black-400'>
            <div className='font-semibold gap-4 px-5 py-5 md:flex-row flex flex-col  items-center'>
                <div className='text-[40px]'><IoDocumentSharp/></div>
                   <div className='text-center'>
                   {t('secureDocuments')}
                    </div>            
            </div>
        </div>
        <div className='border md:flex-row flex flex-col bg-background-100   border-background-500  text-black-400'>
            <div className='font-semibold gap-4 px-5 py-5 md:flex-row flex flex-col  items-center'>
                <div className='text-[40px]'><MdPayments/></div>
                   <div className='text-center'>
                      {t('securePayment')}
                    </div>            
            </div>
        </div>
        <div className='border    border-background-500 bg-background-100  text-black-400'>
            <div className='font-semibold md:flex-row flex flex-col gap-4 px-5 py-5   items-center'>
                <div className='text-[40px]'><MdOutlineSupportAgent/></div>
                   <div className='text-center' >
                   {t('exchangeOffer')}
                    </div>            
            </div>
        </div>

       </div>
       </Wrapper>
    </div>
  )
}

export default SecondHeroSection
