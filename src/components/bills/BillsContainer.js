import React,{useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { asyncGetBills } from '../../actions/billsActions'
import GenerateBill from './GenerateBill'

const BillsContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetBills())
    },[dispatch])

  return (
    <div>
        <GenerateBill/>
    </div>
  )
}

export default BillsContainer