import React from "react";
import { styled,Typography, TableContainer,Paper,Table,TableHead,TableBody,TableRow,TableCell} from "@mui/material";
import { findCustomer } from "../../helpers/helperFunctions";

const RecentBills = ({ data,customers }) => {

  return (
    <>
      <Typography mb={'15px'} variant='h5' component='h1'> Recent Bills </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{bgcolor: '#e0f2f1'}}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Amount (₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((ele, i) => {
              return (
                <TableRow key={ele._id} hover role="checkbox">
                  <TableCell> {i + 1} </TableCell>
                  <TableCell> {findCustomer(ele.customer,customers)} </TableCell>
                  <TableCell> {ele.total} </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentBills;
