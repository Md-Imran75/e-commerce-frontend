
import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import BikeDetailsPageCarousel from '../components/product/BikeDetailsPageCarousel'
import RelatedProductCarousel from '../components/product/RelatedProductCarousel'
import Footer from "../components/footer/Footer";

// import { useDispatch } from "react-redux";
// import { addToCart } from "@/store";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const BikeDetailsPage = ({ params }) => {
//   const dispatch = useDispatch();
//   const notify = () => {
//     toast.success("Success. Check your cart!", {
//       position: "bottom-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

  {
    /* products data */
  }
  const product = 
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        images: [
            'http://localhost:3000/images/1.png',
            'http://localhost:3000/images/3.png',
            'http://localhost:3000/images/2.png',
            'http://localhost:3000/images/1.png',
            'http://localhost:3000/images/3.png',
            'http://localhost:3000/images/2.png',

        ],
        abs:'okey',
        fi:'okey',
        regYear: 2034,
        ml:564,
        taxValid:'yes'

    }



const products = [
    
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
    {
        name: 'Suzuki',
        price: 450,
        model: 'Suzuki',
        brand: 'Toyota',
        image: 'http://localhost:3000/images/1.png'
    },
]
  

  return (
    <div>
        <div className="w-full mt-[30px]   md:my-0 md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10  gap-[50px] lg:gap-[100px] ">
          {/* left coloum start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
            <BikeDetailsPageCarousel data={product.images} />
          </div>
          {/* left coloum End */}


          {/* right coloum start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[25px] text-neutral-500  font-medium mb-2 leading-tight">
              {product?.name}
            </div>

            {/* product price */}
            <div className="text-lg text-neutral-500 font-semibold ">
              Price: {product?.price} BDT
            </div>

            <div className="flex md:flex-row flex-col mt-5  justify-between">
              {/* brand */}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 border  border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Brand:{product?.brand}
            </div>

            {/* mile age*/}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Mileage: {product?.model}
            </div>
            </div>



            <div className="flex md:flex-row flex-col justify-between">
              {/* seller Id */}

            <div className="text-[12px] md:text-md my-1 md:mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Seller Id: {product?.ml}
            </div>

            {/* cc */}

            <div className="text-[12px] md:text-md my-1 font-medium py-1 border border-background-500 px-1 text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              CC: {product?.abs}
            </div>
            </div>



           <div className="flex md:flex-row flex-col justify-between">
             {/* fl */}

             <div className="text-[12px] md:text-md my-1 md:mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Fl: {product?.fi}
            </div>

            {/* reg year */}

            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 md:w-[150px] text-left ">
              Reg Year: {product?.regYear}
            </div>
           </div>




            <div className="flex md:flex-row flex-col justify-between">
              {/* kelo metter */}

            <div className="text-[12px] md:text-md my-1 md:mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              K. Meter: {product?.brand}
            </div>

            {/* taxt Valid */}

            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              Tax Valid: {product?.taxValid}
            </div>
            </div>

            <div className="mb-10">

               {/* condition */}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 md:w-[150px] text-left">
              Condition: {product?.model}
            </div>

            {/* abs */}

            
            </div>


            

            {/* Add to button Add */}

            <div className="flex justify-between mb-10">
              <button
                className="w-[180px] h-[50px] mr-2 py-1 md:py-2 rounded-md lg:mr-5 xl:mr-[0] bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500"
                // onClick={() => {
                //   dispatch(
                //     addToCart({
                //       ...data?.[0],

                //       oneProductPrice: data?.[0]?.attributes?.price,
                //     })
                //   );
                //   notify();
                // }}
              >
                Add to Garage
              </button>

              {/* Add to button end */}

              {/* Add to wishlist add */}

              <button className="w-[180px] h-[50px] py-1  md:py-2 rounded-md bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500  ">
                Add to Wishlist
              </button>
            </div>

            {/* Add to wishlist end */}

            {/* Product description Add */}
            <div>
              <div className="text-lg font-bold mb-5">
                Bike Details
              </div>

              <div className="markdown text-md mb-5 ">
                {product?.name}
              </div>
            </div>
            {/* Product description Add */}
          </div>
          {/* right coloum end */}
        </div>

        {/* related product curousel */}
        <div className="border-background-500 border px-5 py-10 mt-10">
          <RelatedProductCarousel products={products} />
        </div>
        {/* related product curousel */}
      </Wrapper>

    </div>

    <Footer/>

    </div>
  );
};

export default  BikeDetailsPage;
