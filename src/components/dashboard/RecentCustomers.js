import React from "react";

const RecentCustomers = ({ data }) => {
  
  return (
    <div>
      <h4> RecentCustomers </h4>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th> Name </th>
            <th> Email </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr key={ele._id}>
                <td> {i + 1} </td>
                <td>
                  {" "}
                  {ele.name[0].toUpperCase() +
                    ele.name.slice(1).toLowerCase()}{" "}
                </td>
                <td> {ele.email ? ele.email : "N/A"} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCustomers;
