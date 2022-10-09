import React from "react";
import { findCustomer } from "../../helpers/helperFunctions";

const RecentBills = ({ data,customers }) => {

  return (
    <div>
      <h4> Recent Bills</h4>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr key={ele._id}>
                <td> {i + 1} </td>
                <td> {findCustomer(ele.customer,customers)} </td>
                <td> {ele.total} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBills;
