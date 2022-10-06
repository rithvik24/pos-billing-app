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

export const asyncEditProduct = (formData,handleCancel) => {
    return (dispatch) => {
        axios.put(`/products/${formData.id}`,formData,{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dispatch(editProduct(result))
            handleCancel()
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncRemoveProduct = (id) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`,{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dispatch(removeProduct(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncShowProductDetails = (id) => {
    return (dispatch) => {
        axios.get(`/products/${id}`,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            alert(`
            Product : ${result.name}
            Price : ${result.price}
            Created on : ${result.createdAt.slice(0,10)}
            Updated on : ${result.updatedAt.slice(0,10)}
            `)
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

export const editProduct = (result) => {
    return {
        type : 'EDIT_PRODUCT',
        payload : result
    }
}

export const removeProduct = (result) => {
    return {
        type : 'REMOVE_PRODUCT',
        payload : result
    }
}

export const sortByNameAtoZ = () => {
    return {
        type : 'A_TO_Z'
    }
}

export const sortByNameZtoA = () => {
    return {
        type : 'Z_TO_A'
    }
}

export const sortByPriceLowtoHigh = () => {
    return {
        type : 'LOW_TO_HIGH'
    }
}

export const sortByPriceHighToLow = () => {
    return {
        type : 'HIGH_TO_LOW'
    }
}