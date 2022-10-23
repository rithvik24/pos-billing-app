import { GET_PRODUCTS,ADD_PRODUCTS, EDIT_PRODUCT, REMOVE_PRODUCT} from '../actions/productsActions'

const productsInitialState = {
    isLoading : false,
    data : []
}

const productsReducers = (state = productsInitialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS : {
            return {...state, data : [...action.payload.reverse()]}
        }
        case ADD_PRODUCTS : {
            return {...state , data : [{...action.payload} , ...state.data]}
        }
        case EDIT_PRODUCT : {
            return {...state , data : state.data.map((ele) => {
                if(ele._id === action.payload._id){
                    return { ...action.payload }
                }else{
                    return {...ele}
                }
            })}
        }
        case REMOVE_PRODUCT : {
            return { ...state, data : state.data.filter((ele) => {
                return ele._id !== action.payload._id
            })}
        }
        default : {
            return {...state}
        }
    }
}

export default productsReducers