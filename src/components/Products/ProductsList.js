import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { asyncEditProduct } from "../../actions/productsActions";
import ProductRowItem from "./ProductRowItem";
import EditProduct from "./EditProduct";
import { searchProducts } from "../../selectors/searchFilter";
import {
  sortProductsByNameAtoZ,
  sortProductsByNameZtoA,
  sortProductsByPriceLowToHigh,
  sortProductsByPriceHighToLow
} from "../../selectors/sortProducts";

const ProductsList = (props) => {
  const [open, setOpen] = useState(false);
  const [sortByName, setSortByName] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [custIdEdit, setCustIdEdit] = useState("");
  const { products, search, indexOfFirstProduct, indexOfLastProduct } = props;

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const passHandleClose = (handleClose) => {
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    onSubmit: (values) => {
      dispatch(asyncEditProduct(values, handleCancel, passHandleClose));
    },
  });

  const handleEdit = (product) => {
    setCustIdEdit(product._id);
    formik.values.id = product._id;
    formik.values.name = product.name;
    formik.values.price = product.price;
  };

  const handleCancel = () => {
    setCustIdEdit("");
  };

  const handleSortByName = () => {
    const toggleSortByName = sortByName;
    setSortByName(!toggleSortByName);
    if (toggleSortByName) {
      sortProductsByNameAtoZ(products);
    } else {
      sortProductsByNameZtoA(products);
    }
  };

  const handleSortByPrice = () => {
    const toggleSortByPrice = sortByPrice;
    setSortByPrice(!toggleSortByPrice);
    if (toggleSortByPrice) {
      sortProductsByPriceLowToHigh(products)
    } else {
      sortProductsByPriceHighToLow(products)
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TableContainer component={Paper} sx={{ width: "650px" }}>
        <Table>
          <caption>Listing Products - {products.length}</caption>
          <TableHead sx={{ bgcolor: "#e0f2f1" }}>
            <TableRow>
              <TableCell onClick={handleSortByName} sx={{ cursor: "pointer" }}>
                {" "}
                Name{" "}
              </TableCell>
              <TableCell onClick={handleSortByPrice} sx={{ cursor: "pointer" }}>
                {" "}
                Price{" "}
              </TableCell>
              <TableCell> Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchProducts(products, search)
              .slice(indexOfFirstProduct, indexOfLastProduct)
              .map((product) => {
                return (
                  <React.Fragment key={product._id}>
                    {product._id === custIdEdit ? (
                      <EditProduct
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                        formik={formik}
                        handleCancel={handleCancel}
                        passHandleClose={passHandleClose}
                      />
                    ) : (
                      <ProductRowItem
                        handleOpen={handleOpen}
                        product={product}
                        handleEdit={handleEdit}
                      />
                    )}
                  </React.Fragment>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
};

export default ProductsList;
