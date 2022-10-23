import { GET_USER,LOGOUT_USER,IS_LOADING} from '../actions/userActions'

const userInitialState = {
    isLoading : true,
    data : {}
}

const userReducers = (state = userInitialState, action) => {
    switch(action.type){
        case GET_USER : {
            return {...state , data : {...action.payload}}
        }
        case LOGOUT_USER : {
            return { ...state , data : {}}
        }
        case IS_LOADING : {
            return {...state , isLoading : false}
        }
        default : {
            return {...state}
        }
    }
}

export default userReducers