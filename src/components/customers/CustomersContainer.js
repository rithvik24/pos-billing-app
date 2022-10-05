import React, { useEffect, useState } from "react";
import AddCustomer from "./AddCustomer";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetCustomers } from "../../actions/customersActions";
import CustomersListing from "./CustomersListing";
import Pagination from "../Pagination";

const CustomersContainer = (props) => {
  const [ searchInput, setSearchInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [ custPerPage] = useState(10)

  const { customers } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  
  const indexOfLastCust = currentPage * custPerPage
  const indexOfFirstCust = indexOfLastCust - custPerPage
  const customersInCurrentPage = customers.data.slice(indexOfFirstCust,indexOfLastCust)
  
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(asyncGetCustomers());
  }, []);
  

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div>
      <AddCustomer />
      <h2> Customers </h2>
      <input type='text' placeholder="search by name or number" value={searchInput} onChange={handleChange}/>
      <CustomersListing searchInput={searchInput} customers={customersInCurrentPage}/>
      <Pagination totalCust = {customers.data.length} custPerPage={custPerPage} handlePagination = {handlePagination} />
    </div>
  );
};

export default CustomersContainer;
