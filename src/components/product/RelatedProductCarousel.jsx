import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const RelatedProductCurousel = ({ products, add_cart }) => {
  const { t } = useTranslation()

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

      <div className="text-xl font-semibold mb-8">{t('youMightAlsoLike')}</div>

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

              <>
                <div key={item._id} className='border border-background-500'>
                  <div className=' h-full flex flex-col'>
                    <Link to={`/bike/details/${item.slug}`}
                      className='flex-grow  transform  bg-white-100 hover:scale-105 cursor-pointer duration-200'
                    >
                      <div className='h-[150px] w-full'>
                        <img className='h-full w-full' height={150} src={item.productImages?.[0]} />
                      </div>
                      <div className=' px-2  h-[110px]  text-black-500/[0.90]'>
                        <div className=' text-[14px] font-medium mt-5 h-[20px]'>
                          {item.name.length > 20 ? (`${item.name.slice(0, 20)}...`) : item.name}
                        </div>
                        <div className=' text-[14px] text-black-500/[0.90] my-[2px]  font-semibold'>
                        {t('brand')}: <span className='bg-secondary-400 text-white-100 py-[1px] px-1'>{item.brand} </span>
                        </div>
                        <div className=' text-[14px] h-[40px] text-black-500/[0.90] font-semibold'>
                        {t('model')}: {item.model}
                        </div>
                        <div className=' mt-1 items-center text-black-500 '>

                          <p className='mr-1  font-bold  text-secondary-400'>
                            &#2547;{item.price}
                          </p>



                        </div>
                      </div>
                    </Link>
                    <button onClick={() => add_cart(item._id)} className='w-full bg-secondary-400 py-[8px] text-white-100 mt-3  font-bold'
                    >
                      {t('addtocart')}
                    </button>
                  </div>
                </div>
              </>

            )
          })
        }


      </Carousel>

    </div>
  )
}

export default RelatedProductCurousel