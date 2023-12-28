import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import api from '../../api/api'

export const place_order = createAsyncThunk(
    'order/confirm_order',
    async ({
        price,
        products,
        booking_fee,
        shippingInfo,
        userId,
        navigate,
        items
    }) => {
        try {
            const {
                data
            } = await api.post('/home/order/confirm-order', {
                price,
                products,
                booking_fee,
                shippingInfo,
                userId,
                navigate,
                items,
            })
            navigate('/payment', {
                state: {
                    price: booking_fee,
                    items,
                    orderId: data.orderId
                }
            })
        
            return true
        } catch (error) {
            console.log(error.message)
            
        }
    }
)

export const get_orders = createAsyncThunk(
    'order/get_orders',
    async ({
        customerId,
        status
    }, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get(`/home/customer/get-orders/${customerId}/${status}`)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_order = createAsyncThunk(
    'order/get_order',
    async (orderId, {
        rejectWithValue,
        fulfillWithValue
    }) => {
        try {
            const {
                data
            } = await api.get(`/home/customer/get-order/${orderId}`)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const orderReducer = createSlice({
    name: 'order',
    initialState: {
        myOrders: [],
        errorMessage: '',
        successMessage: '',
        myOrder: {}
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    

extraReducers: (builder) => {
  builder
    // ... (existing cases for customer_register and customer_login)

    // Add cases for order-related actions
    .addCase(get_orders.fulfilled, (state, action) => {
      state.myOrders = action.payload.orders;
    })
    .addCase(get_order.fulfilled, (state, action) => {
      state.myOrder = action.payload.order;
    });
},
})

export const {
    messageClear
} = orderReducer.actions
export default orderReducer.reducer