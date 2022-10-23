import axios from '../configureAxios/axios'
import Swal from 'sweetalert2'
export const GET_USER = 'GET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const IS_LOADING = 'IS_LOADING'

export const asyncRegisterUser = (formData,handleAfterRegister) => {
    return (dispatch) => {
        axios.post('/users/register',formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errmsg')){
                alert(result.errmsg)
            }else if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                console.log(result)
                alert('Successfully registered')
                handleAfterRegister()
            }

        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncLoginUser = (formData,handleAfterLogin) =>{
    return (dispatch) => {
        axios.post('/users/login',formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                Swal.fire('successfully logged in')
                console.log(result)
                localStorage.setItem('token',result.token)
                handleAfterLogin()
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncGetUser = () => {
    return (dispatch) => {
        axios.get('/users/account',{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dispatch(getUser(result))
            dispatch(isLoading())
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const logoutUser = (handleAfterLogOut) => {
    handleAfterLogOut()
    return {
        type : 'LOGOUT_USER'
    }
}

export const getUser = (result) => {
    return {
        type : 'GET_USER',
        payload : result
    }
}


export const isLoading = () => {
    return {
        type : IS_LOADING
    }
}