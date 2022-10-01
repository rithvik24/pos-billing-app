import axios from '../configureAxios/axios'

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
                alert('successfully logged in')
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