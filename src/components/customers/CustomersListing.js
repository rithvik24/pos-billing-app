import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  asyncShowCustDetails,
  asyncEditCustomer,
  asyncRemoveCustomer,
  sortByNameAscending,
  sortByNameDescending,
} from "../../actions/customersActions";
import CustomerRowItems from "./CustomerRowItems";
import EditCustomer from "./EditCustomer";

const CustomersListing = (props) => {
  const { searchInput,customers } = props;
  const [sort, setSort] = useState(false);
  const [editCust, setEditCust] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSortByName = () => {
    let sortName = sort;
    setSort(!sortName);
    if (sortName) {
      dispatch(sortByNameAscending());
    } else {
      dispatch(sortByNameDescending());
    }
  };

  const showCustDetails = (id) => {
    dispatch(asyncShowCustDetails(id));
  };

  const handleEditFormChange = (e) => {
    const attr = e.target.name;
    if (attr === "name") {
      setName(e.target.value);
    } else if (attr === "mobile") {
      setMobile(e.target.value);
    } else if (attr === "email") {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id,
      name,
      mobile,
      email,
    };
    dispatch(asyncEditCustomer(formData, handleCancel));
  };

  const handleEdit = (customer) => {
    setEditCust(customer._id);
    setId(customer._id);
    setName(customer.name);
    setMobile(customer.mobile);
    setEmail(customer.email);
  };

  const handleCancel = () => {
    setEditCust("");
  };

  const handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      dispatch(asyncRemoveCustomer(id));
    }
  };

  const filterCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      customer.mobile.includes(searchInput)
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                    <EditCustomer
                      name={name}
                      mobile={mobile}
                      email={email}
                      handleEditFormChange={handleEditFormChange}
                      handleCancel={handleCancel}
                    />
                  ) : (
                    <CustomerRowItems
                      customer={customer}
                      showCustDetails={showCustDetails}
                      handleEdit={handleEdit}
                      handleRemove={handleRemove}
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
