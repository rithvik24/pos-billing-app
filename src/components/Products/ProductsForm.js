import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useFormik } from "formik";
import * as yup from "yup";
import { textFiedWidth, productsFormBtnAdd, productsFormBtnCancel } from '../../helpers/styleHelpers'

const ProductsForm = (props) => {
  const { formSubmit } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    onSubmit: (formData, onSubmitProps) => {
      const afterAddProducts = () => {
        onSubmitProps.resetForm();
      };
      formSubmit(formData, afterAddProducts);
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Required"),
      price: yup.string().required("Required"),
    }),
  });

  return (
    <Box 
    sx={{
      p: "0px 20px 20px 50px",
    }}
    component="form" 
    onSubmit={formik.handleSubmit}
    >
      <Grid2 xs={12}>
        <TextField
          {...formik.getFieldProps("name")}
          sx={textFiedWidth}
          type="text"
          name="name"
          label="name"
          error={formik.errors.name && formik.touched.name}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Grid2>
      <Grid2 xs={12}>
        <TextField
          {...formik.getFieldProps("price")}
          sx={textFiedWidth}
          type="text"
          name="price"
          label="price"
          error={formik.errors.price && formik.touched.price}
          helperText={formik.touched.price && formik.errors.price}
        />
      </Grid2>
      <Grid2 xs={12} mt={'20px'}>
        <Button 
        variant="contained" 
        type="submit"
        sx={productsFormBtnAdd}
        >
          Add
        </Button>
      </Grid2>
      <Grid2 xs={12}>
        <Button
          sx={productsFormBtnCancel}
          variant="contained"
          onClick={() => {
            formik.resetForm();
          }}
        >
          cancel
        </Button>
      </Grid2>
    </Box>
  );
};

export default ProductsForm;
