import React from 'react'
import Carousel from 'react-multi-carousel'
import  'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'

const CarouselItem = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

   
    return (
        <div className='w-full '>
            <div className=' mx-2 md:mx-5'>
                <div className='w-full flex flex-wrap '>
                    <div className='w-full'>
                        <div className='my-2 relative rounded-md md:my-5'>
                            <Carousel
                                autoPlay={true}
                                infinite={true}
                                arrows={true}
                                showDots={true}
                                responsive={responsive}
                                renderButtonGroupOutside={true}
                            >
                                {
                                    [1, 2, 3,].map((img, i) => <div className='block' key={i}>
                                        <img className=' w-full xl:h-[350px]' src={`http://localhost:3000/images/${img}.png`} alt="carousel images" />
                                    </div>)
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem