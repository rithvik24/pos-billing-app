import React from "react";

const EditProduct = (props) => {
    const { formik, handleCancel } = props
    
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </td>
      <td>
        <button type="submit"> Add </button>
        <button onClick={handleCancel}> cancel </button>
      </td>
    </tr>
  );
};

export default EditProduct;
