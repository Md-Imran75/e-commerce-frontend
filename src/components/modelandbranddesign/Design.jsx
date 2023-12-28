import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

const Design = ({ data, route , name }) => {


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdtablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 3
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 2
        }
    }
    return (
        <div>

            <Carousel
                infinite={true}
                arrows={true}
                responsive={responsive}
                transitionDuration={500}
                itemClass="carousel-item"
            >
                {
                    data?.map((data) => <div className='h-[150px] block' key={data?.slug} to='#'>
                        <div className='w-full h-full text-center border border-background-500'>
                            <Link to={`/${route}?${name}=${data.name}`}>
                            <img className='w-full h-[120px]' src={data?.image} alt="image" />
                            <div className='absolute  w-full mx-auto font-bold left-0 flex  justify-center items-center'>

                                <span className='py-[2px] w-full  text-xs text-black-500  '>{data?.name}</span>
                            </div>
                            </Link>
                        </div>
                    </div>)
                }
            </Carousel>

        </div>
    )
}

export default Design