const customersInitialState = {
    isLoading : false,
    data : []
}

const customersReducers = (state=customersInitialState, action) => {
    switch(action.type) {
        case 'GET_CUSTOMERS' : {
            return {...state, data : [...action.payload.reverse()]}
        }
        case 'ADD_CUSTOMER' : {
            return {...state , data : [{...action.payload}, ...state.data] }
        }
        case 'EDIT_CUSTOMER' : {
            return { ...state , data : state.data.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            })}
        }
        case 'REMOVE_CUSTOMER' : {
            return {...state , data : state.data.filter((ele) => {
                return ele._id !== action.payload._id
            })}
        }
        case 'SORT_BY_NAME_ASCENDING' : {
            return { ...state, data : [...state.data.sort((a,b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }else{
                    return -1
                }
            })]}
        }
        case 'SORT_BY_NAME_DESCENDING' : {
            return { ...state, data : [...state.data.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return 1
                }else{
                    return -1
                }
            })]}
        }
        default : {
            return {...state}
        } 
    }
}

export default customersReducers