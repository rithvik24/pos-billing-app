import { GET_BILLS,GENERATE_BILL,REMOVE_BILL } from "../actions/billsActions"

const billsInitialState = {
    isLoading : false,
    data : []
}

const billsReducers = (state=billsInitialState, action) => {
    switch(action.type){
        case GET_BILLS : {
            return { ...state , data : [...action.payload.reverse()]}
        }
        case GENERATE_BILL : {
            return { ...state , data : [ {...action.payload}, ...state.data] }
        }
        case REMOVE_BILL : {
            return { ...state, data : state.data.filter((ele) => {
                return ele._id !== action.payload._id
            })}
        }
        default : {
            return {...state}
        }
    }
}

export default billsReducers