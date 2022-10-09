import React from "react";

const RecentProducts = ({ data }) => {
  return (
    <div>
      <h4> Recent Products </h4>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th> Name </th>
            <th> Price (₹) </th>
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
                <td> {ele.price} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentProducts;
