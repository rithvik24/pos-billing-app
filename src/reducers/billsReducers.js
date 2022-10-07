const billsInitialState = {
    isLoading : false,
    data : []
}

const billsReducers = (state=billsInitialState, action) => {
    switch(action.type){
        case 'GET_BILLS' : {
            return { ...state , data : [...action.payload]}
        }
        default : {
            return {...state}
        }
    }
}

export default billsReducers