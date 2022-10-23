import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Paper,
  TextField,
  Typography,
  IconButton,
  Button,
  Tooltip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

const BillsForm = (props) => {
  const { generateBill } = props;
  const [lineItems, setLineItems] = useState([{ product: "", quantity: "" }]);

  const { customers, products } = useSelector((state) => {
    return state;
  });

  const formik = useFormik({
    initialValues: {
      date: format(new Date(), "yyyy/MM/dd"),
      customer: "",
    },
    onSubmit: (formData) => {
      formData.lineItems = [...lineItems];
      generateBill(formData, handleFormReset);
    },
    validationSchema: yup.object().shape({
      customer: yup.string().required("Required"),
    }),
    validateOnChange: false,
  });

  const handleFormReset = () => {
    formik.setValues({ customer: "" });
    setLineItems([{ product: "", quantity: "" }]);
  };

  const handleChange = (e, index) => {
    const newLineItems = [...lineItems];
    newLineItems[index][e.target.name] = e.target.value;
    setLineItems(newLineItems);
  };

  const handleAdd = () => {
    setLineItems([{ product: "", quantity: "" }, ...lineItems]);
  };

  const handleRemove = (index) => {
    const result = lineItems.filter((lineItem, i) => {
      return index !== i;
    });
    setLineItems(result);
  };

  return (
    <Box
      component={Paper}
      sx={{
        width: "500px",
        height: "350px",
        bgcolor: "#e0f2f1",
        padding: "15px 30px 0px 30px",
        overflowY: "scroll",
      }}
    >
      <Typography
        sx={{ marginLeft: "15px", marginTop: "10px" }}
        variant="h4"
        component="h1"
      >
        Add Items
      </Typography>
      <Box
        sx={{ marginLeft: "15px", marginTop: "10px" }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          {...formik.getFieldProps("customer")}
          sx={{ width: "180px" }}
          select
          label="select customer"
          name="customer"
          error={formik.touched.customer && formik.errors.customer}
          helperText={formik.touched.customer && formik.errors.customer}
        >
          {customers.data.map((customer) => {
            return (
              <MenuItem key={customer._id} value={customer._id}>
                {customer.name}
              </MenuItem>
            );
          })}
        </TextField>

        {lineItems.map((lineItem, i) => {
          return (
            <div key={i}>
              <TextField
                sx={{ width: "180px", marginTop: "12px" }}
                select
                label="select products"
                name="product"
                value={lineItem.product}
                onChange={(e) => {
                  handleChange(e, i);
                }}
              >
                {products.data.map((product) => {
                  return (
                    <MenuItem key={product._id} value={product._id}>
                      {product.name}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                sx={{ width: "100px", marginTop: "12px", marginLeft: "12px" }}
                type="number"
                inputProps={{ min: 1, max: 100 }}
                name="quantity"
                value={lineItem.quantity}
                onChange={(e) => {
                  handleChange(e, i);
                }}
              />
              <Tooltip title="add" placement="bottom" arrow>
                <IconButton
                  sx={{ marginTop: "8px", marginLeft: "4px", color: "#00b8d4" }}
                  type="button"
                  onClick={handleAdd}
                >
                  <AddIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              {lineItems.length === 1 ? (
                <Tooltip title="clear" arrow>
                  <IconButton
                    sx={{
                      marginTop: "8px",
                      marginLeft: "4px",
                      color: "#00b8d4",
                    }}
                    type="button"
                    onClick={handleFormReset}
                  >
                    <ClearIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="delete" arrow>
                  <IconButton
                    sx={{
                      marginTop: "8px",
                      marginLeft: "4px",
                      color: "#ff5252",
                    }}
                    variant="contained"
                    size="small"
                    type="button"
                    onClick={() => handleRemove(i)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          );
        })}
        <Button
          sx={{
            bgcolor: "#00b8d4",
            textTransform: "inherit",
            marginTop: "10px",
            "&:hover": {
              bgcolor: "#40c4ff",
            },
          }}
          variant="contained"
          type="submit"
        >
          Generate Bill
        </Button>
      </Box>
    </Box>
  );
};

export default BillsForm;
