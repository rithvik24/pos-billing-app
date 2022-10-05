import React from "react";

const EditCustomer = (props) => {
  const {name,mobile,email, handleEditFormChange, handleCancel} = props
  

  return (
    <tr>
      <td>
        <input type="text" placeholder="name*" name="name" value={name} onChange={handleEditFormChange}/>
      </td>
      <td>
      <input type="text" placeholder="mobile*" name="mobile" value={mobile}  onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" placeholder="email" name="email" value={email}  onChange={handleEditFormChange}/>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick = {handleCancel}>cancel</button>
      </td>
    </tr>
  );
};

export default EditCustomer;
