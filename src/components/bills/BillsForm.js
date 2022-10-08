import React, { useEffect, useState } from "react";
import { format } from 'date-fns'
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { asyncGetCustomers } from "../../actions/customersActions";
import { asyncGetPorducts } from "../../actions/productsActions";

const BillsForm = (props) => {
  const { generateBill } = props;
  const [lineItems, setLineItems] = useState([{ product: "", quantity: "" }]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetCustomers());
    dispatch(asyncGetPorducts());
  }, [dispatch]);
  const { customers, products } = useSelector((state) => {
    return state;
  });

  const formik = useFormik({
    initialValues: {
      date : format(new Date(), 'yyyy/MM/dd'),
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <select name="customer" {...formik.getFieldProps("customer")}>
          <option value=""> select customer </option>
          {customers.data.map((customer) => {
            return (
              <option key={customer._id} value={customer._id}>
                {customer.name}
              </option>
            );
          })}
        </select>
        {formik.errors && formik.touched && (
          <span> {formik.errors.customer} </span>
        )}
        <br />
        {lineItems.map((lineItem, i) => {
          return (
            <div key={i}>
              <select
                name="product"
                value={lineItem.product}
                onChange={(e) => {
                  handleChange(e, i);
                }}
              >
                <option value=""> select product </option>
                {products.data.map((product) => {
                  return (
                    <option key={product._id} value={product._id}>
                      {product.name}
                    </option>
                  );
                })}
              </select>
              <input
                type="number"
                min="1"
                max="50"
                name="quantity"
                value={lineItem.quantity}
                onChange={(e) => {
                  handleChange(e, i);
                }}
              />
              {lineItems.length === 1 ? (
                <>
                  <button type="button" onClick={handleAdd}>
                    add
                  </button>
                  <button type="button" onClick={handleFormReset}>
                    clear
                  </button>
                </>
              ) : (
                <>
                  <button type="button" onClick={handleAdd}>
                    add
                  </button>
                  <button type="button" onClick={() => handleRemove(i)}>
                    remove
                  </button>
                </>
              )}
            </div>
          );
        })}
        <br />
        <button type="submit">Generate Bill</button>
      </form>
    </div>
  );
};

export default BillsForm;
