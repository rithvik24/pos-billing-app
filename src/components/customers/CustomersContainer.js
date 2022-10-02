import React,{useEffect} from 'react'
import AddCustomer from './AddCustomer'
import { useDispatch } from 'react-redux'
import { asyncGetCustomers } from '../../actions/customersActions'

const CustomersContainer = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetCustomers())
    },[])

  return (
    <div>
        <AddCustomer/>        
    </div>
  )
}

export default CustomersContainer