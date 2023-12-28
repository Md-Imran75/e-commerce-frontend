import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BikeDetailsPageCarousel = ({data}) => {
    
    return (
        <div className="text-white-100 text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {data?.map((img , i) => (
                    <img
                        key={i}
                        src={img}
                        alt={'img'}
                        loading="lazy"
                        height='full'
                        width='full'
                    />
                ))}
             
            </Carousel>
        </div>
    );
};

export default BikeDetailsPageCarousel;