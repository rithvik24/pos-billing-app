import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducers from '../reducers/userReducers'

const configureStore = () => {
    const rootReducer = combineReducers({
        user : userReducers
    })
    const store = createStore(rootReducer,applyMiddleware(thunk))
    return store
}

export default configureStore