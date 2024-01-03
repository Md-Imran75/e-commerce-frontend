import React from 'react'
import Carousel from '../carousel/Carousel'

const HeroSection = () => {

  return (
    <div>
      <div className='xl:flex xl:justify-start'>
        <div className='xl:w-8/12  xl:h-[400px]'>
            <Carousel/>
        </div>
        <div className='xl:4/12 xl:block mt-6 hidden'>
            <div className='flex flex-col gap-3'>
                <div className='h-[170px] w-full'>
                    <img className='h-full' src="http://localhost:3000/images/1.png" alt="" />
                </div>
                <div className='h-[170px] w-full'>
                    <img className='h-full' src="http://localhost:3000/images/2.png" alt="" />
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default HeroSection
