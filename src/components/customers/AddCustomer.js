import React from "react";
import { useDispatch } from "react-redux";
import CustomersForm from "./CustomersForm";
import { asyncAddCustomer } from "../../actions/customersActions";

const AddCustomer = (props) => {
  const dispatch = useDispatch();
  const formSubmit = (formData, handleAfterAddCust) => {
    dispatch(asyncAddCustomer(formData, handleAfterAddCust));
  };

  return <CustomersForm formSubmit={formSubmit}/>;
};

export default AddCustomer;
