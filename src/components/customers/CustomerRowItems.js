import React from "react";

const CustomerRowItems = (props) => {
    const { customer,showCustDetails , handleEdit, handleRemove } = props

  return (
    <tr>
      <td> {customer.name} </td>
      <td> {customer.mobile} </td>
      <td> {customer.email ? customer.email : "N/A"} </td>
      <td>
        <button type='button'
          onClick={() => {
            showCustDetails(customer._id);
          }}
        >
          details
        </button>
        <button type="button" onClick={ () => handleEdit(customer) }>edit</button>
        <button type="button" onClick={() => handleRemove(customer._id)}>remove</button>
      </td>
    </tr>
  );
};

export default CustomerRowItems;
