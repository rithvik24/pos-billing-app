import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { asyncEditCustomer } from "../../actions/customersActions";
import CustomerRowItems from "./CustomerRowItems";
import EditCustomer from "./EditCustomer";
import { sortNameAtoZ , sortNameZtoA} from "../../selectors/sortCustomersByName";
import { searchCustomer } from '../../selectors/searchFilter'

const CustomersListing = (props) => {
  const {searchInput,customers,indexOfLastCust,indexOfFirstCust} = props;
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
      sortNameAtoZ(customers)
    } else {
      sortNameZtoA(customers)
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <TableContainer component={Paper} sx={{ width: "800px" }}>
        <Table>
          <caption> Listing Customers - {customers.length} </caption>
          <TableHead sx={{ bgcolor: "#e0f2f1" }}>
            <TableRow>
              <TableCell sx={{ cursor: "pointer" }} onClick={handleSortByName}>
                Name
              </TableCell>
              <TableCell> Mobile </TableCell>
              <TableCell> Email </TableCell>
              <TableCell> Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchCustomer(customers,searchInput).slice(indexOfFirstCust, indexOfLastCust).map((customer) => {
                return (
                  <React.Fragment key={customer._id}>
                    {customer._id === editCust ? (
                      <EditCustomer
                        formik={formik}
                        handleCancel={handleCancel}
                      />
                    ) : (
                      <CustomerRowItems
                        customer={customer}
                        handleEdit={handleEdit}
                      />
                    )}
                  </React.Fragment>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
};

export default CustomersListing;
