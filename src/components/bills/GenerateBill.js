import React from 'react'
import { useDispatch } from 'react-redux'
import BillsForm from './BillsForm'
import { asyncGenerateBill } from '../../actions/billsActions'

const GenerateBill = () => {
  const dispatch = useDispatch()
  const generateBill = (formData,handleFormReset) => {
    dispatch(asyncGenerateBill(formData,handleFormReset))
  }

  return (
    <div>
        <BillsForm generateBill={generateBill}/>
    </div>
  )
}

export default GenerateBill