import React from "react";

const EditProduct = (props) => {
    const { formik, handleCancel } = props
    
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          {...formik.getFieldProps('name')}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          {...formik.getFieldProps('price')}
        />
      </td>
      <td>
        <button type="submit"> update </button>
        <button onClick={handleCancel}> cancel </button>
      </td>
    </tr>
  );
};

export default EditProduct;
