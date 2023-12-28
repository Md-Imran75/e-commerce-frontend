
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'


const ProductCard = ({ data }) => {


  // Access the attributes property of the data prop
  const { name, price, model, slug, productImages, brand } = data;


  //   const dispatch = useDispatch()




  


  //   const handleAddToCart = () => {
  //     dispatch(addToCart({
  //       ...data,
  //       oneProductPrice: price,

  //     }));
  //     notify()
  //   };

  return (
    <div className='border border-background-500'>
      <div className=' h-full flex flex-col'>
        <Link to={`bike/details/${slug}`}
          className='flex-grow  transform  bg-white-100 hover:scale-105 cursor-pointer duration-200'
        >
          <div className='h-[150px] w-full'>
            <img className='h-full w-full' height={150}  src={productImages?.[0]} />
          </div>        
          <div className=' px-2  h-[110px]  text-black-500/[0.90]'>
            <div className=' text-[14px] font-medium mt-5 h-[20px]'>
              {name.length > 20 ? (`${name.slice(0, 20)}...`) : name}
            </div>
            <div className=' text-[14px] text-black-500/[0.90] my-[2px]  font-semibold'>
              Brand: <span className='bg-secondary-400 text-white-100 py-[1px] px-1'>{brand} </span>
            </div>
            <div className=' text-[14px] h-[40px] text-black-500/[0.90] font-semibold'>
              Model: {model}
            </div>
            <div className=' mt-1 items-center text-black-500 '>

              <p className='mr-1  font-bold  text-secondary-400'>
                &#2547;{price}
              </p>



            </div>
          </div>
        </Link>
        <button className='w-full bg-secondary-400 py-[8px] text-white-100 mt-3  font-bold'
        >
          Add to Garage
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
