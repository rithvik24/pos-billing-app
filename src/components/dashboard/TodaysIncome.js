import React from 'react'
import { Card, CardContent,Typography} from '@mui/material'

const TodaysIncome = (props) => {
    const { data } = props

    const todaysIncome = () => {
        const result = data.reduce((previousValue,currentValue) => {
            return previousValue + currentValue.total
        },0)
        return result
    }
    
  return (
    <Card sx = {{textAlign : 'center',width : '300px'}}>
        <CardContent>
          <Typography  variant='h4' component='h1'> Todays Income </Typography> 
        </CardContent>
        <CardContent sx={{bgcolor:'#e0f2f1'}}>
          <Typography  variant='h4' component='h1'> {todaysIncome()} ₹  </Typography> 
        </CardContent>
    </Card>
  )
}
export default TodaysIncome