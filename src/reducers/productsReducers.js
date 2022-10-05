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
        default : {
            return {...state}
        }
    }
}

export default productsReducers