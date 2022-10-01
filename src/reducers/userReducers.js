const userInitialState = {
    isLoading : false,
    data : {}
}

const userReducers = (state = userInitialState, action) => {
    switch(action.type){
        default : {
            return {...state}
        }
        
    }
}

export default userReducers