import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncRemoveBill } from '../../actions/billsActions'
import { findCustomer } from "../../helpers/helperFunctions";

const BillsList = (props) => {
    const { bills, customers} = props
    const dispatch = useDispatch()
    
    const handleRemove = (id) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            dispatch(asyncRemoveBill(id))
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
                                <td> {findCustomer(bill.customer,customers)} </td>
                                <td> {bill.createdAt.slice(0,10)} </td>
                                <td> {bill.total} </td>
                                <td> 
                                    <Link to={`/billing/${bill._id}`}>view</Link>
                                    <button onClick={() => handleRemove(bill._id)}> delete </button>    
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