import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const RelatedProductCurousel = ({products}) => {

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mdtablet: {
        breakpoint: { max: 991, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 2
    },
    smmobile: {
        breakpoint: { max: 640, min: 0 },
        items: 2
    },
    xsmobile: {
        breakpoint: { max: 440, min: 0 },
        items: 1
    }
    };

  return (
    <div className=" -z-50 "  >

     <div className="text-2xl font-bold mb-8">You Might Also Like</div>
     
       <Carousel
       containerClass='-mx-[10px]'
       itemClass='px-[10px] '  
       responsive={responsive}
       ssr={true}
       keyBoardControl={true}
       
       >
            
            
            {
              products?.map((item) => {
                return (
                 
                  <ProductCard key={item.id} data={item} />
                 
                )
              })
            }
        
         
       </Carousel>

    </div>
  )
}

export default RelatedProductCurousel