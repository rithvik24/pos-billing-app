const billsInitialState = {
    isLoading : false,
    data : []
}

const billsReducers = (state=billsInitialState, action) => {
    switch(action.type){
        case 'GET_BILLS' : {
            return { ...state , data : [...action.payload.reverse()]}
        }
        case 'GENERATE_BILL' : {
            return { ...state , data : [ {...action.payload}, ...state.data] }
        }
        default : {
            return {...state}
        }
    }
}

export default billsReducers