import React from "react";
import { Typography, TableContainer,Paper,Table,TableHead,TableBody,TableRow,TableCell } from "@mui/material";

const RecentProducts = ({ data }) => {
  return (
    <>
      <Typography mb={'15px'} variant='h5' component='h1'> Recent Products </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{bgcolor: '#e0f2f1'}}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell> Name </TableCell>
              <TableCell> Price (₹) </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((ele, i) => {
              return (
                <TableRow key={ele._id} hover role="checkbox">
                  <TableCell> {i + 1} </TableCell>
                  <TableCell>
                    {" "}
                    {ele.name[0].toUpperCase() +
                      ele.name.slice(1).toLowerCase()}{" "}
                  </TableCell>
                  <TableCell> {ele.price} </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentProducts;
