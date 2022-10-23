import React from "react";
import Swal from 'sweetalert2'
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncRemoveBill } from "../../actions/billsActions";
import { findCustomer } from "../../helpers/helperFunctions";

const BillsList = (props) => {
  const { bills, customers, getFirstIndexOfBillsItem,getLastIndexOfBillsItem} = props;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(asyncRemoveBill(id));
      }
    })
  };

  return (
    <TableContainer component={Paper} sx={{ width: "600px" }}>
      <Table>
        <caption>Listing Bills - {bills.length}</caption>
        <TableHead sx={{ bgcolor: "#e0f2f1" }}>
          <TableRow>
            <TableCell> Customer </TableCell>
            <TableCell> Date </TableCell>
            <TableCell> Total </TableCell>
            <TableCell> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.slice(getFirstIndexOfBillsItem,getLastIndexOfBillsItem).map((bill) => {
            return (
              <TableRow key={bill._id} hover role="checkbox">
                <TableCell>
                  {findCustomer(bill.customer, customers)}
                </TableCell>
                <TableCell> {bill.createdAt.slice(0, 10)} </TableCell>
                <TableCell> {bill.total} </TableCell>
                <TableCell>
                  <Link className="viewLink" to={`/billing/${bill._id}`}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "initial",
                        color: "#00b8d4",
                        "&:hover": {
                          borderColor: "#00b8d4",
                        },
                      }}
                    >
                      View
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    sx={{
                        marginBottom : '4px',
                        color: "#ff5252",
                        borderColor: "#ff5252",
                        "&:hover": {
                          borderColor: "#ff5252",
                        }
                    }}
                    size="small"
                    onClick={() => handleRemove(bill._id)}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillsList;
