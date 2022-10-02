import React from 'react'
import { useDispatch } from 'react-redux'
import CustomersForm from './CustomersForm'
import { asyncAddCustomer } from '../../actions/customersActions'

const AddCustomer = (props) => {
    const dispatch = useDispatch()
    const formSubmit = (formData,handleAfterAddCust) => {
        dispatch(asyncAddCustomer(formData,handleAfterAddCust))
    }

  return (
    <div>
        <h2>Add a customer</h2>
        <CustomersForm formSubmit={formSubmit}/>
    </div>
  )
}

export default AddCustomer