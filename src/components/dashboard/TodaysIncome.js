import React from 'react'

const TodaysIncome = (props) => {
    const { data } = props

    const todaysIncome = () => {
        const result = data.reduce((previousValue,currentValue) => {
            return previousValue + currentValue.total
        },0)
        return result
    }
    
  return (
    <div>
        <h4> Todays Income </h4>
        <p> {todaysIncome()} ₹ </p>
    </div>
  )
}

export default TodaysIncome