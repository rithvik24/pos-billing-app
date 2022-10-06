import EditCustomer from '../components/customers/EditCustomer'
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

export const asyncShowCustDetails = (id) =>{
    return (dispatch) => {
        axios.get(`/customers/${id}`,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('message')){
                alert(result.message)
            }else{
                alert(`
                    Name : ${result.name}
                    Mobile : ${result.mobile}
                    Email : ${ result.email ? result.email : 'N/A' }
                    Created At : ${result.createdAt.slice(0,10)}
                `)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncEditCustomer = (custData,handleCancel) => {
    return (dispatch) => {
        axios.put(`/customers/${custData._id}`,custData,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(editCustomer(result))
                handleCancel()
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncRemoveCustomer = (id) => {
    return (dispatch) => {
        axios.delete(`/customers/${id}`,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dispatch(removeCustomer(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const sortByNameAscending = () =>{
    return {
        type : 'SORT_BY_NAME_ASCENDING'
    }
}

export const sortByNameDescending = () =>{
    return {
        type : 'SORT_BY_NAME_DESCENDING'
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

export const  editCustomer = (result) => {
    return {
        type : 'EDIT_CUSTOMER',
        payload : result
    }
}

export const removeCustomer = (result) => {
    return {
        type : 'REMOVE_CUSTOMER',
        payload : result
    }
}