import homeReducer from './reducers/homeReducer'
import authReducer from './reducers/authReducer'
import orderReducer from './reducers/orderReducer'
import dashboardReducer from './reducers/dashboardReducer'
import cartReducer from './reducers/cartReducer'
const rootReducers = {
    home: homeReducer,
    auth: authReducer,
    order : orderReducer,
    dashboard : dashboardReducer,
    cart : cartReducer,
    order: orderReducer

}
export default rootReducers