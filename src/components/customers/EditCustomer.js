import React from "react";

const EditCustomer = (props) => {
  const { formik , handleCancel} = props
  

  return (
    <tr>
      <td>
        <input type="text" placeholder="name*" name="name" {...formik.getFieldProps('name')} />
      </td>
      <td>
        <input type="text" placeholder="mobile*" name="mobile" {...formik.getFieldProps('mobile')}/>
      </td>
      <td>
        <input type="text" placeholder="email" name="email" {...formik.getFieldProps('email')}/>
      </td>
      <td>
        <button type="submit">update</button>
        <button type="button" onClick={handleCancel}>cancel</button>
      </td>
    </tr>
  );
};

export default EditCustomer;
