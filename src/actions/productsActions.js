import axios from '../configureAxios/axios'

export const asyncGetPorducts = () => {
    return (dispatch) => {
        axios.get('/products',{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dispatch(getProducts(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncAddProducts = (formData,afterAddProducts) => {
    return (dispatch) => {
        axios.post('/products',formData,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(addProducts(result))
                afterAddProducts()
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const getProducts = (result) => {
    return {
        type : 'GET_PRODUCTS',
        payload : result
    }
}

export const addProducts = (result) => {
    return {
        type : 'ADD_PRODUCTS',
        payload : result
    }
}