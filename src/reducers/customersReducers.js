const customersInitialState = {
    isLoading : false,
    data : []
}

const customersReducers = (state=customersInitialState, action) => {
    switch(action.type) {
        case 'GET_CUSTOMERS' : {
            return {...state, data : [...action.payload]}
        }
        case 'ADD_CUSTOMER' : {
            return {...state , data : [...state.data , {...action.payload}] }
        }
        default : {
            return {...state}
        } 
    }
}

export default customersReducers