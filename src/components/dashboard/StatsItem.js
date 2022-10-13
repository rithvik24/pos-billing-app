import React from 'react'
import { Card, CardContent,Typography} from '@mui/material'
const StatsItem = (props) => {
    const { data , text} = props
  return (
    <Card sx = {{textAlign : 'center',width : '300px'}}>
        <CardContent>
          <Typography  variant='h4' component='h1'> {text} </Typography>
        </CardContent>
        <CardContent  sx={{bgcolor:'#e0f2f1'}}>
          <Typography variant='h4' component='h1'> {data.length}</Typography>        
        </CardContent>
    </Card>
  )
}

export default StatsItem