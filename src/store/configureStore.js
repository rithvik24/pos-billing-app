import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducers from '../reducers/userReducers'
import customersReducers from '../reducers/customersReducers'
import productsReducers from '../reducers/productsReducers'
import billsReducers from '../reducers/billsReducers'

const configureStore = () => {
    const rootReducer = combineReducers({
        user : userReducers,
        customers : customersReducers,
        products : productsReducers,
        bills : billsReducers
    })
    const store = createStore(rootReducer,applyMiddleware(thunk))
    return store
}

export default configureStore