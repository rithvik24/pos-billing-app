import React from 'react'

const Actions = (props) => {
    const { _id , showCustDetails } = props

  return (
    <div>
        <button onClick={ () => { showCustDetails(_id)} }> details </button>
        <button> Edit </button>
    </div>
  )
}

export default Actions