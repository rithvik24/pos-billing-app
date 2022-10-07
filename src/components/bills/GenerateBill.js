import React from 'react'
import BillsForm from './BillsForm'

const GenerateBill = () => {

  const generateBill = (formData) => {
    console.log('gb',formData)
  }

  return (
    <div>
        <BillsForm generateBill={generateBill}/>
    </div>
  )
}

export default GenerateBill