import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { asyncGetBills } from '../../actions/billsActions'
import GenerateBill from './GenerateBill'
import BillsList from './BillsList'

const BillsContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetBills())
    },[dispatch])

    const  { bills ,customers } = useSelector((state) => {
      return state
    })
  
  return (
    <div>
        <GenerateBill/>
        <BillsList bills = {bills.data} customers = {customers.data}/>
    </div>
  )
}

export default BillsContainer