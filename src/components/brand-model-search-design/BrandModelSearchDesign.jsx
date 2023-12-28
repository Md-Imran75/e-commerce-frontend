import ProductsDesign from '../allProducts/ProductsDesign'
import Pagination from '../pagination/Pagination'
import { Range } from 'react-range'

const BrandModelSearchDesign = ({setFilter , filter , priceRange , state , setState , totalProduct , setSortPrice , products , pageNumber, setPageNumber, perPage}) => {
 
    
  
    return (
        <div>
            
            <section className='py-16 md:mx-0 mx-5'>
                <div className='lg:w-[85%] w-[90%%] sm:w-[90%] h-full mx-auto'>
                    <div className='mb-6'>
                        <button onClick={()  => setFilter(!filter)} className='text-center bg-primary-300 md:text-left w-[200px] font-semibold py-2 px-3 bg-indigo-500 text-black-500'>Filter Product</button>
                    </div>
                    <div className='w-full flex flex-wrap'>
                       {
                        filter &&  <div className={`md:w-3/12  w-full pr-8 '}`}>
                        
                        <div className='py-2 flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold mb-3 text-black-500'>Price</h2>
                            <Range
                                step={5}
                                min={priceRange.low}
                                max={priceRange.high}
                                values={state.values}
                                onChange={(values) => setState({ values })}
                                renderTrack={({ props, children }) => (
                                    <div {...props} className='w-full h-[6px] bg-secondary-400 rounded-full cursor-default'>
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div className='w-[15px] h-[15px] bg-black-500 rounded-full' {...props} />

                                )}
                            />
                            <div>
                                <span className='text-red-500 font-bold text-lg'>${Math.floor(state.values[0])} - ${Math.floor(state.values[1])}</span>
                            </div>
                        </div>
                        
                     
                    </div>
                       }
                        <div className={` md:mt-0 mt-10 ${filter ? 'md:w-9/12' :'w-full'} w-full`}>
                            <div>
                                <div className='py-4 bg-white mb-10 px-3 rounded-md flex justify-between items-start border border-background-500 shadow-sm'>
                                    <h2 className='text-lg font-medium text-black-500'>{totalProduct} Products</h2>
                                    <div className='flex justify-center items-center gap-3'>
                                        <select onChange={(e) => setSortPrice(e.target.value)} className='p-1 border outline-0 text-black-500 border-background-500 bg-primary-300 font-semibold' name="" id="">
                                            <option value="">Sort By</option>
                                            <option value="low-to-high">Low to High Price</option>
                                            <option value="high-to-low">High to Low Price</option>
                                        </select>
                                      
                                    </div>
                                </div>
                                <div className='pb-8'>
                                    <ProductsDesign products={products} filter={filter} />
                                </div>
                                <div>
                                    {
                                        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalItem={totalProduct} perPage={perPage} showItem={Math.floor(totalProduct / perPage)} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BrandModelSearchDesign