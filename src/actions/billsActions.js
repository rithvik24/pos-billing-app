import axios from '../configureAxios/axios'
export const GET_BILLS = 'GET_BILLS'
export const GENERATE_BILL = 'GENERATE_BILL'
export const REMOVE_BILL = 'REMOVE_BILL'


export const asyncGetBills = () => {
    return (dipatch) => {
        axios.get('/bills',{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dipatch(getBills(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncGenerateBill = (formData, handleFormReset) => {
    return (dispatch) => {
        axios.post('/bills',formData,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(generateBill(result))
                handleFormReset()
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncRemoveBill = (id) => {
    return (dispatch) => {
        axios.delete(`/bills/${id}`,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            dispatch(removeBill(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const getBills = (result) => {
    return {
        type : 'GET_BILLS',
        payload : result
    }
}

export const generateBill = (result) => {
    return {
        type : 'GENERATE_BILL',
        payload : result
    }
}

export const removeBill = (result) => {
    return {
        type : 'REMOVE_BILL',
        payload : result
    }
}