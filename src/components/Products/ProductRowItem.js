import React from "react";
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
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      dispatch(asyncRemoveProduct(product._id));
    }
  };

  const showProductDetails = () => {
    dispatch(asyncShowProductDetails(product._id));
  };

  return (
    <TableRow>
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
