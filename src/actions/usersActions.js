import axios from '../configureAxios/axios'

export const asyncRegisterUser = (formData,formReset,pushToLogin) => {
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
                formReset()
                pushToLogin()
            }

        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

