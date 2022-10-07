import axios from '../configureAxios/axios'

export const asyncGetBills = () => {
    return (dipatch) => {
        axios.get('/bills',{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const result = response.data
            console.log(result)
            dipatch(getBills(result))
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