import React from "react";
import { TableCell, TableRow, TextField, Button } from "@mui/material";
const EditCustomer = (props) => {
  const { formik, handleCancel } = props;

  return (
    <TableRow>
      <TableCell>
        <TextField
          {...formik.getFieldProps("name")}
          variant="standard"
          required
          type="text"
          label="name"
          name="name"
        />
      </TableCell>
      <TableCell>
        <TextField
          {...formik.getFieldProps("mobile")}
          variant="standard"
          required
          type="text"
          label="mobile"
          name="mobile"
        />
      </TableCell>
      <TableCell>
        <TextField
          {...formik.getFieldProps("email")}
          variant="standard"
          required
          type="text"
          label="email"
          name="email"
        />
      </TableCell>
      <TableCell>
        <Button
          size="small"
          sx={{
            color: "#00b8d4",
            textTransform: "initial",
            height: "34px",
            marginRight: "30px",
            "&:hover": {
              borderColor: "#00b8d4",
            },
          }}
          type="submit"
          variant="outlined"
        >
          update
        </Button>
        <Button
          size="small"
          sx={{
            color: "#00b8d4",
            textTransform: "initial",
            height: "34px",
            marginRight: "30px",
            "&:hover": {
              borderColor: "#00b8d4",
            }
          }}
          type="button"
          variant="outlined"
          onClick={handleCancel}
        >
          cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditCustomer;
