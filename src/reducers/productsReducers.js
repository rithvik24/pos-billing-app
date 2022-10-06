const productsInitialState = {
    isLoading : false,
    data : []
}

const productsReducers = (state = productsInitialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS' : {
            return {...state, data : [...action.payload.reverse()]}
        }
        case 'ADD_PRODUCTS' : {
            return {...state , data : [{...action.payload} , ...state.data]}
        }
        case 'EDIT_PRODUCT' : {
            return {...state , data : state.data.map((ele) => {
                if(ele._id === action.payload._id){
                    return { ...action.payload }
                }else{
                    return {...ele}
                }
            })}
        }
        case 'REMOVE_PRODUCT' : {
            return { ...state, data : state.data.filter((ele) => {
                return ele._id !== action.payload._id
            })}
        }
        case 'A_TO_Z' : {
            return {...state, data : [...state.data.sort((a,b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }else{
                    return -1
                }
            })]}
        }
        case 'Z_TO_A' : {
            return {...state, data : [...state.data.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return 1
                }else{
                    return -1
                }
            })]}
        }
        case 'LOW_TO_HIGH' : {
            return {...state, data : [...state.data.sort((a,b) => {
                return a.price - b.price
            })]}
        }
        case 'HIGH_TO_LOW' : {
            return {...state , data : [...state.data.sort((a,b) => {
                return b.price - a.price
            })]}
        }
        default : {
            return {...state}
        }
    }
}

export default productsReducers