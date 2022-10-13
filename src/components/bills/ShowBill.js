import React, { useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Table,
  TableHead,
  Typography,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Button,
} from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { asyncGetBills } from "../../actions/billsActions";
import { asyncGetCustomers } from "../../actions/customersActions";
import { asyncGetPorducts } from "../../actions/productsActions";


const ShowBill = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const componentRef = useRef();

  useEffect(() => {
    dispatch(asyncGetBills());
    dispatch(asyncGetCustomers());
    dispatch(asyncGetPorducts());
  }, [dispatch]);

  const { bills, customers, products } = useSelector((state) => {
    return state;
  });

  const findBill = () => {
    const result = bills.data.find((bill) => {
      return bill._id === id;
    });
    return result;
  };

  const findCustomer = () => {
    if (findBill()) {
      const result = customers.data.find((customer) => {
        return customer._id === findBill().customer;
      });
      return result;
    }
  };

  const findProduct = (id) => {
    const result = products.data.find((product) => {
      return product._id === id;
    });
    if (result) {
      return result.name;
    }
  };

  return (
    <Box mt={"100px"} ml={"85px"}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <div ref={componentRef}>
            {findCustomer() && (
              <Box
                component={Paper}
                sx={{
                  width: "300px",
                  padding: "20px 0px 20px 20px",
                  bgcolor: "#9e9e9e",
                }}
              >
                <Typography variant="h6" component="h1">
                  Name : {findCustomer().name}{" "}
                </Typography>
                <Typography variant="subtitle1" component="h1">
                  Ph : {findCustomer().mobile}{" "}
                </Typography>
                <Typography variant="subtitle1" component="h1">
                  Email : {findCustomer().email ? findCustomer().email : "N/A"}{" "}
                </Typography>
                <Typography variant="subtitle1" component="h1">
                  Date : {findBill().createdAt.slice(0, 10)}{" "}
                </Typography>
              </Box>
            )}
            {findBill() && (
              <TableContainer
                component={Paper}
                sx={{
                  width: "700px",
                  marginTop: "20px",
                }}
              >
                <Table>
                  <TableHead
                    sx={{
                      bgcolor: "#9e9e9e",
                    }}
                  >
                    <TableRow>
                      <TableCell> Items </TableCell>
                      <TableCell> Quantity </TableCell>
                      <TableCell> Price (₹) </TableCell>
                      <TableCell>Sub Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {findBill().lineItems.map((lineItem) => {
                      return (
                        <TableRow key={lineItem._id} hover role="checkbox">
                          <TableCell>
                            {" "}
                            {findProduct(lineItem.product)}{" "}
                          </TableCell>
                          <TableCell> {lineItem.quantity} </TableCell>
                          <TableCell> {lineItem.price} </TableCell>
                          <TableCell> {lineItem.subTotal} </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow>
                      <TableCell align="right" colSpan={3}>
                        <Typography variant="h6" component="h2">
                          Total
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {findBill() && (
                          <Typography variant="h6" component="h2">
                            {findBill().total} ₹
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <div>
            <Link className="viewLink" to="/billing">
              <Button 
              variant='contained'
              sx = {{
                marginTop : '15px',
                textTransform: "initial",
                bgcolor: "#00b8d4",
                "&:hover": {
                  bgcolor: "#40c4ff",
                },
              }}
              >
                Back
              </Button>
            </Link>
            <ReactToPrint
              trigger={() => <Button
              variant="contained"
              sx={{
                marginTop : '15px',
                textTransform: "initial",
                bgcolor: "#00b8d4",
                "&:hover": {
                  bgcolor: "#40c4ff",
                },
              }}
              >Print</Button>}
              content={() => componentRef.current}
            />
          </div>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ShowBill;
