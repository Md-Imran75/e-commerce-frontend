import React, { useEffect, useState } from 'react'
import { Range } from 'react-range'
import ProductsDesign from './ProductsDesign'
import Pagination from '../pagination/Pagination'
import { price_range_product, query_products } from '../../store/reducers/homeReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';


const AllProducts = () => {

    const { t } = useTranslation()


    const { products, totalProduct, models, priceRange, perPage } = useSelector(state => state.home)
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    const [filter, setFilter] = useState(true)
    const [model, setModel] = useState('')
    const [state, setState] = useState({ values: [priceRange.low, priceRange.high] })
    const [sortPrice, setSortPrice] = useState('')

    const activeProducts = products.filter((p) => p.status === 'active');



    useEffect(() => {
        dispatch(price_range_product())

    }, [])
    useEffect(() => {
        setState({
            values: [priceRange.low, priceRange.high]
        })
    }, [priceRange])

    const queryModel = (e, value) => {
        if (e.target.checked) {
            setModel(value)
        } else {
            setModel('')
        }
    }
    console.log(model)
    useEffect(() => {
        dispatch(
            query_products({
                low: state.values[0],
                high: state.values[1],
                model,
                sortPrice,
                pageNumber
            })
        )
    }, [state.values[0], state.values[1], model, pageNumber, sortPrice])





    return (
        <div>

            <section className='py-16 md:mx-0 mx-5'>
                <div className='lg:w-[85%] w-[90%%] sm:w-[90%] h-full mx-auto'>
                    <div className='mb-6'>
                        <button onClick={() => setFilter(!filter)} className='text-center bg-primary-300 md:text-left w-[200px] font-semibold py-2 px-3 bg-indigo-500 text-black-500'>{t('filterBike')}</button>
                    </div>
                    <div className='w-full flex flex-wrap'>
                        {
                            filter && <div className={`md:w-3/12  w-full pr-8 '}`}>
                                <h2 className='text-2xl font-bold mb-3 text-black-500'>
                                    {t('topModel')}
                                </h2>
                                <div className='py-2'>
                                    {
                                        models?.map((c) => <div className='flex justify-start items-center gap-2 py-1' key={c.slug}>
                                            <input checked={model === c.name ? true : false} onChange={(e) => queryModel(e, c.name)} type="checkbox" id={c.name} />
                                            <label className='text-slate-600 block cursor-pointer' htmlFor={c.name}>{c.name}</label>
                                        </div>)
                                    }
                                </div>
                                <div className='py-2 flex flex-col gap-5'>
                                    <h2 className='text-2xl font-bold mb-3 text-black-500'>
                                    {t('price')}
                                    
                                    </h2>
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
                                        <span className='text-red-500 font-bold text-lg'>&#2547;{Math.floor(state.values[0])} - &#2547;{Math.floor(state.values[1])}</span>
                                    </div>
                                </div>


                            </div>
                        }
                        <div className={` md:mt-0 mt-10 ${filter ? 'md:w-9/12' : 'w-full'} w-full`}>
                            <div>
                                <div className='py-4 bg-white mb-10 px-3 rounded-md flex justify-between items-start border border-background-500 shadow-sm'>
                                    <h2 className='text-lg font-medium text-black-500'>{activeProducts?.length} {t('products')}</h2>
                                    <div className='flex justify-center items-center gap-3'>
                                        <select onChange={(e) => setSortPrice(e.target.value)} className='p-1 border outline-0 text-black-500 border-background-500 bg-primary-300 font-semibold' name="" id="">
                                            <option value="">
                                               {t('shortBy')}
                                                
                                            </option>
                                            <option value="low-to-high"> {t('lowToHighPrice')}</option>
                                            <option value="high-to-low">{t('highToLowPrice')}</option>
                                        </select>

                                    </div>
                                </div>
                                <div className='pb-8'>
                                    <ProductsDesign products={activeProducts} filter={filter} />
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

export default AllProducts