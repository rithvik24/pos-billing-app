import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from 'react-to-print';
import { asyncGetBills } from "../../actions/billsActions";
import { asyncGetCustomers } from "../../actions/customersActions";
import { asyncGetPorducts } from "../../actions/productsActions";

const ShowBill = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const componentRef  = useRef()

  useEffect(() => {
    dispatch(asyncGetBills());
    dispatch(asyncGetCustomers());
    dispatch(asyncGetPorducts());
  }, [dispatch]);

  const { bills, customers, products } = useSelector((state) => {
    return state;
  });

  const findBill = () => {
    const result = bills.data.find((bill) => {
      return bill._id === id;
    });
    return result;
  };

  const findCustomer = () => {
    if (findBill()) {
      const result = customers.data.find((customer) => {
        return customer._id === findBill().customer;
      });
      return result;
    }
  };

  const findProduct = (id) => {
    const result = products.data.find((product) => {
      return product._id === id;
    });
    if (result) {
      return result.name;
    }
  };

  return (
    <>
      <div ref={componentRef}>
        {findCustomer() && (
          <>
            <p>Date : {findBill().createdAt.slice(0, 10)} </p>
            <p>Customer Details</p>
            <p>Name : {findCustomer().name} </p>
            <p>Ph : {findCustomer().mobile} </p>
            <p>Email : {findCustomer().email ? findCustomer().email : "N/A"} </p>
          </>
        )}
        {findBill() && (
          <table border="1px">
            <thead>
              <tr>
                <th> Items </th>
                <th> Quantity </th>
                <th> Price (₹) </th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {findBill().lineItems.map((lineItem) => {
                return (
                  <tr key={lineItem._id}>
                    <td> {findProduct(lineItem.product)} </td>
                    <td> {lineItem.quantity} </td>
                    <td> {lineItem.price} </td>
                    <td> {lineItem.subTotal} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        { findBill() && <p> Total - { findBill().total } ₹</p> }
      </div>
      <div>
        <Link to='/billing'>Back</Link>
        <ReactToPrint
        trigger={() => <button>print</button> }
        content = { () => componentRef.current}
        />
      </div>
    </>
  );
};

export default ShowBill;
