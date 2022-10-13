import React from "react";
import "../App.css";

const Pagination = (props) => {
  const { totalItems, itemsPerPage, handlePagination} = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="paginationContainer">
        {
            pageNumbers.map((ele,i) => {
                return (
                    <li className='paginationItem' key={i} onClick={() => {handlePagination(ele)}}>{ele}</li>
                )
            })
        }
    </ul>
  );
};

export default Pagination;
