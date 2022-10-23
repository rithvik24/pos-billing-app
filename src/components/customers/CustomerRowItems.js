import React from "react";
import Swal from 'sweetalert2'
import { TableCell, TableRow, Button } from "@mui/material";
import { useDispatch} from "react-redux";
import {
  asyncShowCustDetails,
  asyncRemoveCustomer,
} from "../../actions/customersActions";
import { customerActionsBtn } from "../../helpers/styleHelpers";

const CustomerRowItems = (props) => {
  const { customer, handleEdit } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Remove'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(asyncRemoveCustomer(customer._id));
      }
    })
  };

  const showCustDetails = () => {
    dispatch(asyncShowCustDetails(customer._id));
  };
  
  return (
    <TableRow hover role="checkbox">
      <TableCell> {customer.name} </TableCell>
      <TableCell> {customer.mobile} </TableCell>
      <TableCell> {customer.email ? customer.email : "N/A"} </TableCell>
      <TableCell>
        <Button
          sx={customerActionsBtn}
          size="small"
          variant="outlined"
          type="button"
          onClick={showCustDetails}
        >
          Details
        </Button>
        <Button
          sx={customerActionsBtn}
          size="small"
          variant="outlined"
          type="button"
          onClick={() => handleEdit(customer)}
        >
          Edit
        </Button>
        <Button
          sx={{
            ...customerActionsBtn, 
            color : '#ff5252', 
            borderColor : '#ff5252',
            '&:hover' : {
              borderColor : '#ff5252',
            }
          }}
          size="small"
          variant="outlined"
          type="button"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CustomerRowItems;
