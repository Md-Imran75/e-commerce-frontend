import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import api from '../../api/api'
export const get_model = createAsyncThunk(
    'product/get_model',
    async (_, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get('/home/get-models')
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)


export const get_brand = createAsyncThunk(
    'product/get_brand',
    async (_, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get('/home/get-brands')
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)

        }
    }
)

export const get_products = createAsyncThunk(
    'product/get_products',
    async (_, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get('/home/get-products')
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)

export const get_product = createAsyncThunk(
    'product/get_product',
    async (slug, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get(`/home/get-product/${slug}`)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)

export const price_range_product = createAsyncThunk(
    'product/price_range_product',
    async (_, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get('/home/price-range-latest-product')
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const query_products = createAsyncThunk(
    'product/query_products',
    async (query, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get(`/home/query-products?model=${query?.model}&&lowPrice=${query?.low}&&highPrice=${query?.high}&&sortPrice=${query?.sortPrice}&&pageNumber=${query?.pageNumber}&&searchValue=${query?.searchValue ? query?.searchValue : ''}`)

            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)

export const query_products_brand = createAsyncThunk(
    'product/query_products_brand',
    async (query, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get(`/home/query-products-brand?brand=${query?.brand}&&lowPrice=${query?.low}&&highPrice=${query.high}&&sortPrice=${query.sortPrice}&&pageNumber=${query?.pageNumber}&&searchValue=${query?.searchValue ? query?.searchValue : ''}`)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)





export const homeReducer = createSlice({
    name: 'home',
    initialState: {
        models: [],
        brands: [],
        products: [],
        totalProduct: 0,
        perPage: 1,
        latest_product: [],
        priceRange: {
            low: 0,
            high: 100
        },
        product: {},
        relatedProducts: [],
        moreProducts: [],
        successMessage: '',
        errorMessage: '',
    },
    reducers: {
        messageClear: (state, _) => {
            state.successMessage = ""
            state.errorMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
          // Product-related cases
          .addCase(get_model.fulfilled, (state, action) => {
            state.models = action.payload.models;
          })
          .addCase(get_model.rejected, (state, action) => {
            state.errorMessage = action.payload.error;
            state.loader = false;
          })

          .addCase(get_brand.fulfilled, (state, action) => {
            state.brands = action.payload.brands;
          })
          .addCase(get_brand.rejected, (state, action) => {
            state.errorMessage = action.payload.error;
            state.loader = false;
          })
          .addCase(get_products.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.latest_product = action.payload.latest_product;
          })
          .addCase(get_products.rejected, (state, action) => {
            state.errorMessage = action.payload.error;
            state.loader = false;
          })
          .addCase(get_product.fulfilled, (state, action) => {
            state.product = action.payload.product;
            state.relatedProducts = action.payload.relatedProducts;
            state.moreProducts = action.payload.moreProducts;
          })
          .addCase(get_product.rejected, (state, action) => {
            state.errorMessage = action.payload.error;
            state.loader = false;
          })
          .addCase(price_range_product.fulfilled, (state, action) => {
            state.latest_product = action.payload.latest_product;
            state.priceRange = action.payload.priceRange;
          })
          .addCase(price_range_product.rejected, (state, action) => {
            state.errorMessage = action.payload.error;
            state.loader = false;
          })
          .addCase(query_products.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.totalProduct = action.payload.totalProduct;
            state.perPage = action.payload.perPage;
          })
          .addCase(query_products.rejected, (state, action) => {
            state.errorMessage = action.payload.error;
            state.loader = false;
          })
          .addCase(query_products_brand.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.totalProduct = action.payload.totalProduct;
            state.perPage = action.payload.perPage;
          })
          .addCase(query_products_brand.rejected, (state, action) => {
            state.errorMessage = action.payload.error;
            state.loader = false;
          })
      },
      
})
export const {
    messageClear
} = homeReducer.actions
export default homeReducer.reducer