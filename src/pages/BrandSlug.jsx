import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { price_range_product,  query_products_brand,} from '../store/reducers/homeReducer'
import { useDispatch, useSelector } from 'react-redux'
import BrandSlugDesign from '../components/brand-model-search-design/BrandModelSearchDesign'

const BrandSlug = () => {
     
    let [searchParams , setSearchParams] = useSearchParams()
    const brand = searchParams.get('brand')
    const { products,totalProduct, priceRange, perPage } = useSelector(state => state.home)
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    const [filter, setFilter] = useState(true)
    const [state, setState] = useState({ values: [priceRange.low, priceRange.high] })
    const [sortPrice, setSortPrice] = useState('')
    
   

    useEffect(() => {
        dispatch(price_range_product())
    }, [])

    useEffect(() => {
        setState({
            values: [priceRange.low, priceRange.high]
        })
    }, [priceRange])

   
    useEffect(() => {
        dispatch(
            query_products_brand({
                low: state.values[0] || '',
                high: state.values[1] || '',
                brand,
                sortPrice,
                pageNumber,
            })
        )
    }, [state.values[0], state.values[1], brand, pageNumber, sortPrice])
    
   
  return (
    <div>
      <BrandSlugDesign setFilter={setFilter} filter={filter} priceRange={priceRange} state={state} setState={setState} totalProduct={totalProduct} setSortPrice={setSortPrice} products={products} pageNumber={pageNumber} setPageNumber={setPageNumber} perPage={perPage}  />
    </div>
  )
}

export default BrandSlug
