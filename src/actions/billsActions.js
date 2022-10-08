import axios from '../configureAxios/axios'

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