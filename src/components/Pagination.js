import React from 'react'

const Pagination = (props) => {
    const { totalItems, itemsPerPage, handlePagination } = props

    const pageNumbers = []
    for(let i=1; i<=Math.ceil(totalItems/itemsPerPage); i++){
        pageNumbers.push(i)
    }
    
  return (
    <div>
        <span>Page </span>
        {
            pageNumbers.map((pageNumber) => {
                return (
                    <span key={pageNumber} onClick = {() => {
                        handlePagination(pageNumber)
                    }}>{pageNumber} </span>
                )
            })
        }
    </div>
  )
}

export default Pagination