import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetBills } from "../../actions/billsActions";
import GenerateBill from "./GenerateBill";
import BillsList from "./BillsList";
import Pagination from "../Pagination";

const BillsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(5);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetBills());
  }, [dispatch]);

  const { bills, customers } = useSelector((state) => {
    return state;
  });

  const getLastIndexOfBillsItem = currentPage * billsPerPage;
  const getFirstIndexOfBillsItem = getLastIndexOfBillsItem - billsPerPage;
  const currentPageBills = bills.data.slice(
    getFirstIndexOfBillsItem,
    getLastIndexOfBillsItem
  );

  const handlePagination = (pageNum) => {
    setCurrentPage(pageNum);
  };
  return (
    <Box mt={"100px"} ml={"85px"}>
      <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <BillsList bills={currentPageBills} customers={customers.data} />
          <Pagination
            totalItems={bills.data.length}
            itemsPerPage={billsPerPage}
            handlePagination={handlePagination}
          />
        </Grid2>
        <Grid2 xs={6}>
          <GenerateBill />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default BillsContainer;
