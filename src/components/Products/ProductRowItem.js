import React from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { TableRow, TableCell, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  asyncRemoveProduct,
  asyncShowProductDetails,
} from "../../actions/productsActions";
import { productsActionsBtn } from "../../helpers/styleHelpers";

const ProductRowItem = (props) => {
  const { product, handleEdit } = props;
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
        dispatch(asyncRemoveProduct(product._id));
      }
    })
  };

  const showProductDetails = () => {
    dispatch(asyncShowProductDetails(product._id));
  };

  return (
    <TableRow hover role="checkbox">
      <TableCell> {product.name} </TableCell>
      <TableCell> {product.price} </TableCell>
      <TableCell>
        <Button
          sx={{
            marginRight: "5px",
            ...productsActionsBtn,
          }}
          variant="outlined"
          size="small"
          type="button"
          onClick={showProductDetails}
        >
          Details
        </Button>
        <Button
          sx={{
            marginLeft: "5px",
            ...productsActionsBtn
          }}
          size="small"
          variant="outlined"
          type="button"
          onClick={() => {
            handleEdit(product);
          }}
        >
          Edit
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            color: "#ff5252",
            textTransform: "initial",
            borderColor: "#ff5252",
            height: "34px",
            "&:hover": {
              borderColor: "#ff5252",
            },
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

export default ProductRowItem;
