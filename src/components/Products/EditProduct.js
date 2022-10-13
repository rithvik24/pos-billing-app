import React from "react";
import { TableCell, TableRow, TextField, Button } from "@mui/material";

const EditProduct = (props) => {
  const { formik, handleCancel } = props;

  return (
    <TableRow>
      <TableCell>
        <TextField
          {...formik.getFieldProps("name")}
          variant="standard"
          required
          type="text"
          name="name"
        />
      </TableCell>
      <TableCell>
        <TextField
          {...formik.getFieldProps("price")}
          variant="standard"
          required
          type="text"
          name="price"
        />
      </TableCell>
      <TableCell>
        <Button
          variant="outlined"
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
        >
          update
        </Button>
        <Button
          variant="outlined"
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
          onClick={handleCancel}
        >
          cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditProduct;
