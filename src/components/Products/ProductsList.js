import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { asyncEditProduct } from "../../actions/productsActions";
import ProductRowItem from "./ProductRowItem";
import EditProduct from "./EditProduct";

const ProductsList = (props) => {
  const [custIdEdit, setCustIdEdit] = useState('')
  const { products } = props;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    onSubmit: (values) => {
      dispatch(asyncEditProduct(values,handleCancel));
    },
  });

  const handleEdit = (product) => {
    setCustIdEdit(product._id)
    formik.values.id = product._id
    formik.values.name = product.name
    formik.values.price = product.price
  }

  const handleCancel = () => {
    setCustIdEdit('')
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <table border="1px">
          <thead>
            <tr>
              <th> Name </th>
              <th> Price </th>
              <th> Actions </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              return (
                <React.Fragment key={product._id}>
                    {
                        product._id === custIdEdit ? (
                                <EditProduct
                                formik={formik}
                                handleCancel = {handleCancel}
                                />
                        ) : (
                                <ProductRowItem
                                product={product}
                                handleEdit={handleEdit}
                                />
                        )
                    }
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ProductsList;
