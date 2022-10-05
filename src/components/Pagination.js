import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    const { totalCust, custPerPage,handlePagination } = props

    const pageNumbers = []
    for(let i=1; i<=Math.ceil(totalCust/custPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <div>
        {
            pageNumbers.map((pageNumber) => {
                return (
                    <span key={pageNumber} onClick = {() => {
                        handlePagination(pageNumber)
                    }}>  {pageNumber} </span>
                )
            })
        }
    </div>
  )
}

export default Pagination