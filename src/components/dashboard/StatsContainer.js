import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { asyncGetCustomers } from '../../actions/customersActions'
import { asyncGetPorducts } from '../../actions/productsActions'
import { asyncGetBills } from '../../actions/billsActions'
import StatsItem from './StatsItem'
import { getTodaysIncome } from '../../selectors/getTodaysIncome'
import TodaysIncome from './TodaysIncome'
import RecentCustomers from './RecentCustomers'
import RecentProducts from './RecentProducts'
import RecentBills from './RecentBills'
import Graph from './Graph'

const StatsContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetCustomers())
        dispatch(asyncGetPorducts())
        dispatch(asyncGetBills())
    },[dispatch])

    const { customers, products, bills } = useSelector((state) => {
        return state
    })

  return (
    <div>
        <h3> Dashboard </h3>
        <StatsItem data={customers.data} text = {'Total Customers'}/>
        <StatsItem data={products.data} text = {'Total Products'}/>
        <StatsItem data={bills.data} text = {'Total Bills'}/>
        <TodaysIncome data = {getTodaysIncome(bills.data)}/>
        <RecentCustomers data = {customers.data.slice(0,5)}/>
        <RecentProducts data = {products.data.slice(0,5)}/>
        <RecentBills data = {bills.data.slice(0,5)} customers = {customers.data}/>
        <Graph bills = {bills.data}/>
    </div>
  )
}

export default StatsContainer