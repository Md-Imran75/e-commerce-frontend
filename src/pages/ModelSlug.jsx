import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { price_range_product, query_products} from '../store/reducers/homeReducer'
import { useDispatch, useSelector } from 'react-redux'
import ModelSlugDesign from '../components/brand-model-search-design/BrandModelSearchDesign'

const ModelSlug = () => {
     
    let [searchParams , setSearchParams] = useSearchParams()
    const model = searchParams.get('model')

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
            query_products({
                low: state.values[0] || '',
                high: state.values[1] || '',
                model,
                sortPrice,
                pageNumber,
            })
        )
    }, [state.values[0], state.values[1], model, pageNumber, sortPrice])
    
   
  return (
    <div>
      <ModelSlugDesign setFilter={setFilter} filter={filter} priceRange={priceRange} state={state} setState={setState} totalProduct={totalProduct} setSortPrice={setSortPrice} products={products} pageNumber={pageNumber} setPageNumber={setPageNumber} perPage={perPage}  />
    </div>
  )
}

export default ModelSlug
