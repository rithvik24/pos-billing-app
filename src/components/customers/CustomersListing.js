import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncShowCustDetails, asyncEditCustomer, asyncRemoveCustomer } from '../../actions/customersActions'
import CustomerRowItems from './CustomerRowItems'
import EditCustomer from './EditCustomer'

const CustomersListing = (props) => {
    const [editCust , setEditCust] = useState('')
    const [id, setId] = useState('')
    const [ name, setName] = useState('')
    const [ mobile, setMobile] = useState('')
    const [ email, setEmail] = useState('')

    const { customers } = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()

    const showCustDetails = (id) => {
        dispatch(asyncShowCustDetails(id))     
    }
    
    const handleEditFormChange = (e) => {
      const attr = e.target.name
      if(attr==='name'){
        setName(e.target.value)
      }else if (attr === 'mobile'){
        setMobile(e.target.value)
      }else if(attr === 'email'){
        setEmail(e.target.value)
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const formData = {
        id ,
        name,
        mobile,
        email
      }
      dispatch(asyncEditCustomer(formData,handleCancel))
    }

    const handleEdit = (customer) => {
      setEditCust(customer._id)
      setId(customer._id)
      setName(customer.name)
      setMobile(customer.mobile)
      setEmail(customer.email)
    }

    const handleCancel = () => {
      setEditCust('')
    }

    const handleRemove = (id) => {
      const confirmRemove = window.confirm('Are you sure?')
      if(confirmRemove){
        dispatch(asyncRemoveCustomer(id))
      }
    }
    
  return (
    <div>
        <h2> Customers Listing </h2>
          <form onSubmit={ handleSubmit }>
            <table border='1px'>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Mobile </th>
                        <th> Email </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.data.map((customer,i) => {
                            return (
                                <React.Fragment key={customer._id}>
                                  {
                                    customer._id === editCust ? (
                                      <EditCustomer i = {i} name={name} mobile={mobile} email={email} handleEditFormChange={handleEditFormChange} handleCancel={handleCancel}/>
                                    ) : (
                                      <CustomerRowItems i = {i} customer = {customer} showCustDetails={showCustDetails} handleEdit={handleEdit} handleRemove={handleRemove}/>
                                    )
                                  }
                                </React.Fragment>
                            )
                        })
                    }
                </tbody>
            </table>
          </form>
    </div>
  )
}

export default CustomersListing