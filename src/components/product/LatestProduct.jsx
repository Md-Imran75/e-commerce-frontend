import React from 'react'
import ProductCard from './ProductCard'
import Wrapper from '../Wrapper'
const FeatureProduct = ({data}) => {
    

    return (
        <div className='lg:px-10 py-5 lg:py-10 bg-white-100'>
            <Wrapper>
            <div className='border border-background-500 px-5 py-10'>
      <div className='mb-5 text-xl font-semibold  text-black-500'>
        Latest Bikes
      </div>
    <div
       className='grid grid-cols-1   grid-rows-1 h-full  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5  gap-5'
     >
         {data?.map((item) => {
         return (
          <ProductCard key={item?.slug} data={item} className='h-full' />
             );
          })}
          
      </div>
      </div>
            </Wrapper>
        </div>
    )
}

export default FeatureProduct
