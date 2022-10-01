const userInitialState = {
    isLoading : false,
    data : {}
}

const userReducers = (state = userInitialState, action) => {
    switch(action.type){
        case 'SET_USER' : {
            return {...state , data : {...action.payload}}
        }
        default : {
            return {...state}
        }
    }
}

export default userReducers