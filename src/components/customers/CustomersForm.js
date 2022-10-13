import React, { useState } from "react";
import { useFormik } from "formik";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, TextField, Button, Typography,Dialog, DialogContent,DialogActions,DialogTitle } from "@mui/material";
import * as yup from "yup";
import { textFiedWidth, customerFormBtn } from "../../helpers/styleHelpers";

const CustomersForm = (props) => {
  const [open, setOpen] = useState(false)
  const { formSubmit } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
    },
    onSubmit: (formData, onSubmitProps) => {
      const handleAfterAddCust = () => {
        onSubmitProps.resetForm();
        handleClose()
      };
      formSubmit(formData, handleAfterAddCust);
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Required").min(3,'name should be of minimum 3 characters').max(128,'name cannot have more than 128 characters'),
      mobile: yup
        .string()
        .required("Required")
        .length(10, "mobile number must be of 10 digits"),
    }),
  });

  const handleCancel = () => {
    formik.setValues(formik.initialValues);
    setOpen(false)
  };

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Button
        sx={{ textTransform: "initial" }}
        variant="text"
        onClick={handleOpen}
      >
        <Typography
          sx={{ fontWeight: "medium", color: "#00b8d4" }}
          variant="h5"
          component="h1"
        >
          Add a Customer
        </Typography>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box sx={{width:'390px'}} component="form" onSubmit={formik.handleSubmit}>
            <DialogContent>
                <Grid2 container spacing={1}>
                    <Grid2 xs={12}>
                        <TextField
                        sx={textFiedWidth}
                        variant="standard"
                        {...formik.getFieldProps("name")}
                        type="text"
                        required
                        label="Name"
                        name="name"
                        error={formik.errors.name && formik.touched.name}
                        helperText={formik.touched.name && formik.errors.name}
                        />
                    </Grid2>
                    <Grid2 xs={12}>
                        <TextField
                        sx={textFiedWidth}
                        variant="standard"
                        {...formik.getFieldProps("mobile")}
                        type="text"
                        required
                        label="Mobile"
                        name="mobile"
                        error={formik.errors.mobile && formik.touched.mobile}
                        helperText={formik.touched.mobile && formik.errors.mobile}
                        />
                    </Grid2>
                    <Grid2 xs={12}>
                        <TextField
                        sx={textFiedWidth}
                        variant="standard"
                        {...formik.getFieldProps("email")}
                        type="text"
                        label="Email"
                        name="email"
                        />
                    </Grid2>
                    <DialogActions>
                        <Grid2 xs={6}>
                            <Button 
                            sx={customerFormBtn} 
                            type="submit" 
                            variant="contained">
                            Save
                            </Button>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Button
                            sx={{ ...customerFormBtn, ml: "20px" }}
                            variant="contained"
                            onClick={handleCancel}
                            >
                            Cancel
                            </Button>
                        </Grid2>
                    </DialogActions>
                </Grid2>
            </DialogContent>
        </Box>
      </Dialog>

    </Box>
  );
};

export default CustomersForm;
