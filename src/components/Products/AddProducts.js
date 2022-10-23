import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useDispatch } from "react-redux";
import { asyncAddProducts } from "../../actions/productsActions";
import ProductsForm from "./ProductsForm";

const AddProducts = () => {
  const dispatch = useDispatch();
  const formSubmit = (formData, afterAddProducts) => {
    dispatch(asyncAddProducts(formData, afterAddProducts));
  };

  return (
    <Box
      component={Paper}
      sx={{
        width: "450px",
        bgcolor: "#e0f2f1",
      }}
    >
      <Grid2 container spacing={1}>
        <Grid2
          xs={12}
          sx={{
            p: "20px 20px 20px 50px",
          }}
        >
          <Typography variant="h4" component="h1">
            {" "}
            Add Products{" "}
          </Typography>
        </Grid2>
        <ProductsForm formSubmit={formSubmit} />
      </Grid2>
    </Box>
  );
};

export default AddProducts;
