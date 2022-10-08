import React from 'react'
import { Link } from 'react-router-dom'

const BillsList = (props) => {
    const { bills, customers } = props

    const findCustmoer = (id) => {
        const result = customers.find((cust) => {
            return cust._id === id
        })
        if(result) {
            return result.name
        }
    }
    
  return (
    <div>
        <h2> Bills List </h2>
        <table border='1'>
            <thead>
                <tr>
                    <th> Customer </th>
                    <th> Date </th>
                    <th> Total </th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {
                    bills.map((bill) => {
                        return (
                            <tr key={bill._id}>
                                <td> {findCustmoer(bill.customer)} </td>
                                <td> {bill.createdAt.slice(0,10)} </td>
                                <td> {bill.total} </td>
                                <td> 
                                    <Link to={`/billing/${bill._id}`}>view</Link>
                                    <button> delete </button>    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default BillsList