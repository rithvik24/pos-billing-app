import React from 'react'

const StatsItem = (props) => {
    const { data , text} = props
  return (
    <div>
        <h4> {text} </h4>
        <p> {data.length}</p>        
    </div>
  )
}

export default StatsItem