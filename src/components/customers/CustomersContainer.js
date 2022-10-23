import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import AddCustomer from "./AddCustomer";
import { useSelector} from "react-redux";
import CustomersListing from "./CustomersListing";
import Pagination from "../Pagination";
import "../../App.css";

const CustomersContainer = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [custPerPage] = useState(5);

  const { customers } = useSelector((state) => {
    return state;
  });

  const indexOfLastCust = currentPage * custPerPage;
  const indexOfFirstCust = indexOfLastCust - custPerPage;

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Box mt={"100px"} ml={"85px"}>
      <Grid2 container spacing={5}>
        <Grid2 xs={6}>
          <TextField
            sx={{ width: "312px" }}
            type="text"
            placeholder="search by name or mobile"
            value={searchInput}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 xs={6}>
          <AddCustomer />
        </Grid2>
        <Grid2 xs={12}>
          <CustomersListing
            searchInput={searchInput}
            customers={customers.data}
            indexOfFirstCust={indexOfFirstCust}
            indexOfLastCust={indexOfLastCust}
          />
          <Pagination
            currentPage={currentPage}
            totalItems={customers.data.length}
            itemsPerPage={custPerPage}
            handlePagination={handlePagination}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CustomersContainer;
