import React from "react";
import { useDispatch } from "react-redux";
import {
  asyncShowCustDetails,
  asyncRemoveCustomer,
} from "../../actions/customersActions";

const CustomerRowItems = (props) => {
  const { customer, handleEdit } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      dispatch(asyncRemoveCustomer(customer._id));
    }
  };

  const showCustDetails = () => {
    dispatch(asyncShowCustDetails(customer._id));
  };

  return (
    <tr>
      <td> {customer.name} </td>
      <td> {customer.mobile} </td>
      <td> {customer.email ? customer.email : "N/A"} </td>
      <td>
        <button type="button" onClick={showCustDetails}>
          details
        </button>
        <button type="button" onClick={() => handleEdit(customer)}>
          edit
        </button>
        <button type="button" onClick={handleRemove}>
          remove
        </button>
      </td>
    </tr>
  );
};

export default CustomerRowItems;
