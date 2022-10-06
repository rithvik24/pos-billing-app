import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  asyncEditCustomer,
  sortByNameAscending,
  sortByNameDescending,
} from "../../actions/customersActions";
import CustomerRowItems from "./CustomerRowItems";
import EditCustomer from "./EditCustomer";

const CustomersListing = (props) => {
  const { searchInput, customers } = props;
  const [sort, setSort] = useState(false);
  const [editCust, setEditCust] = useState("");

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
    },
    onSubmit: (formData) => {
      dispatch(asyncEditCustomer(formData, handleCancel));
    },
  });

  const handleSortByName = () => {
    let sortName = sort;
    setSort(!sortName);
    if (sortName) {
      dispatch(sortByNameAscending());
    } else {
      dispatch(sortByNameDescending());
    }
  };

  const handleEdit = (customer) => {
    setEditCust(customer._id);
    formik.values.name = customer.name;
    formik.values.mobile = customer.mobile;
    formik.values.email = customer.email;
    formik.values._id = customer._id;
  };

  const handleCancel = () => {
    setEditCust("");
  };

  const filterCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      customer.mobile.includes(searchInput)
    );
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <table border="1px">
          <thead>
            <tr>
              <th onClick={handleSortByName}> Name </th>
              <th> Mobile </th>
              <th> Email </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {filterCustomers.map((customer) => {
              return (
                <React.Fragment key={customer._id}>
                  {customer._id === editCust ? (
                    <EditCustomer formik={formik} handleCancel={handleCancel} />
                  ) : (
                    <CustomerRowItems
                      customer={customer}
                      handleEdit={handleEdit}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CustomersListing;
