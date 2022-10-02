import axios from '../configureAxios/axios'

export const asyncGetCustomers = () => {
    return (dispatch) => {
        axios.get('/customers',{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dispatch(getCustomers(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncAddCustomer = (formData,handleAfterAddCust) => {
    return (dispatch) => {
        axios.post('/customers',formData,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(addCustomer(result))
                handleAfterAddCust()
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const addCustomer = (result) => {
    return {
        type : 'ADD_CUSTOMER',
        payload : result
    }
}

export const getCustomers = (result) => {
    return {
        type : 'GET_CUSTOMERS',
        payload : result
    }
}