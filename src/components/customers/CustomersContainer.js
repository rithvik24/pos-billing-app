import React,{useEffect,useState} from 'react'
import AddCustomer from './AddCustomer'
import { useDispatch } from 'react-redux'
import { asyncGetCustomers } from '../../actions/customersActions'
import CustomersListing from './CustomersListing'
import EditCustomer from './EditCustomer'

const CustomersContainer = (props) => {
    const [ edit, setEdit ] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetCustomers())
    },[])

  return (
    <div>
        <AddCustomer/> 
        <CustomersListing edit={edit}/> 
    </div>
  )
}

export default CustomersContainer