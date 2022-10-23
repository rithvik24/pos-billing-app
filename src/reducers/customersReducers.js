import {ADD_CUSTOMER,EDIT_CUSTOMER,REMOVE_CUSTOMER,GET_CUSTOMERS } from '../actions/customersActions'

const customersInitialState = {
    isLoading : false,
    data : []
}

const customersReducers = (state=customersInitialState, action) => {
    switch(action.type) {
        case GET_CUSTOMERS : {
            return {...state, data : [...action.payload.reverse()]}
        }
        case ADD_CUSTOMER : {
            return {...state , data : [{...action.payload}, ...state.data] }
        }
        case EDIT_CUSTOMER : {
            return { ...state , data : state.data.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            })}
        }
        case REMOVE_CUSTOMER : {
            return {...state , data : state.data.filter((ele) => {
                return ele._id !== action.payload._id
            })}
        }
        default : {
            return {...state}
        } 
    }
}

export default customersReducers