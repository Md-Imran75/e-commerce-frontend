import homeReducer from './reducers/homeReducer'
import authReducer from './reducers/authReducer'
import orderReducer from './reducers/orderReducer'
import dashboardReducer from './reducers/dashboardReducer'
const rootReducers = {
    home: homeReducer,
    auth: authReducer,
    order : orderReducer,
    dashboard : dashboardReducer,
}
export default rootReducers