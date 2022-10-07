import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik' 
import { asyncGetCustomers } from '../../actions/customersActions'
import { asyncGetPorducts } from '../../actions/productsActions'



const BillsForm = (props) => {
  const [ lineItems , setLineItems] = useState([{ product : '',quantity : '' }])
  const [customer , setCustomer] = useState('')
  const [product , setProduct] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetCustomers())
    dispatch(asyncGetPorducts())
  },[dispatch])

  const  { customers , products} = useSelector((state) => {
    return state
  })

  const handleLineItems = (e,index) => {
    console.log(e.target.name)
    const newLineItems = [...lineItems]
    newLineItems[index][e.target.name] = e.target.value
    setLineItems(newLineItems)
  }
  
  const handleChange = (e) => {
    setCustomer(e.target.value)
  }

  const handleAdd = () => {
    setLineItems([{product : '' , quantity : ''}, ...lineItems])
  }

  const handleRemove = (i) =>{
    const result = lineItems.filter((ele,index) => {
      return index !== i
    })
    setLineItems(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      date : `${new Date().getFullYear()}/${new Date().getMonth() + 1}/0${new Date().getDay()}`,
      customer,
      lineItems
    }
    console.log(formData)
  }
  
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <select name='customer' value={customer} onChange={handleChange}>
          <option>select customer</option>
          {
            customers.data.map((customer) => {
              return (
                <option key={customer._id} value={customer._id}> {customer.name} </option>
              )
            })
          }
        </select>
        {
          lineItems.map((lineItem,i) => {
            return (
              <div key={i}>
                <select name='product' value={lineItem.product} onChange={(e) => {handleLineItems(e,i)}}>
                  <option>select product</option>
                  {
                    products.data.map((product) => {
                      return (
                        <option key={product._id} value={product._id}> {product.name} </option>
                      )
                    })
                  }
                </select>

                <input type='number' name='quantity' value={lineItem.quantity} onChange = {(e) => handleLineItems(e,i)}/>

                <button type='button' onClick={ () => handleAdd(i) }>add</button>
                <button type='button' onClick={ () =>  handleRemove(i)}>remove</button>
              </div>
            )
          })
        }
        <button>submit</button>
      </form>      
    </div>
  )
}

export default BillsForm