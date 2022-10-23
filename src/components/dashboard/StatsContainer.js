import React from 'react'
import { Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useSelector } from 'react-redux'
import StatsItem from './StatsItem'
import { getTodaysIncome } from '../../selectors/getTodaysIncome'
import TodaysIncome from './TodaysIncome'
import RecentCustomers from './RecentCustomers'
import RecentProducts from './RecentProducts'
import RecentBills from './RecentBills'
import Graph from './Graph'

const StatsContainer = () => {
    const { customers, products, bills } = useSelector((state) => {
        return state
    })

  return (
      <Box mt = {'100px'} ml = {'85px'}>
        <Grid2 container spacing = {4}>
          <Grid2 ml={'-30px'} xs={3}>
            <StatsItem data={customers.data} text = {'Total Customers'}/>
          </Grid2>
          <Grid2 xs={3}>
            <StatsItem data={products.data} text = {'Total Products'}/>
          </Grid2>
          <Grid2 xs={3}>
            <StatsItem data={bills.data} text = {'Total Bills'}/>
          </Grid2>
          <Grid2 xs={3}>
            <TodaysIncome data = {getTodaysIncome(bills.data)}/>
          </Grid2>
          <Grid2 xs={12} ml={'220px'}>
              <Graph bills = {bills.data}/>
          </Grid2>
          <Grid2 xs={4} ml={'-45px'}>
            <RecentCustomers data = {customers.data.slice(0,5)}/>
          </Grid2>
          <Grid2 xs={4}>
            <RecentProducts data = {products.data.slice(0,5)}/>
          </Grid2>
          <Grid2 xs={4}>
            <RecentBills data = {bills.data.slice(0,5)} customers = {customers.data}/>
          </Grid2>
        </Grid2>
      </Box>
  )
}

export default StatsContainer