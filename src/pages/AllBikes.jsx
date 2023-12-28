import React from 'react'
import Footer from '../components/footer/Footer'
import Carousel from '../components/carousel/Carousel'
import Wrapper from '../components/Wrapper'
import AllProducts from '../components/allProducts/AllProducts'
const AllBikes = () => {
    return (
        <div>
            <Wrapper>
                <Carousel />
            </Wrapper>
            <AllProducts/>
            <Footer />
        </div>
    )
}

export default AllBikes
