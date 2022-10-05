import React from "react";
import { useDispatch } from 'react-redux'
import { asyncAddProducts } from "../../actions/productsActions";
import ProductsForm from "./ProductsForm";

const AddProducts = () => {
  const dispatch = useDispatch()
  const formSubmit = (formData,afterAddProducts) => {
    dispatch(asyncAddProducts(formData, afterAddProducts))
  }

  return (
    <div>
      <h2> Add Products </h2>
      <ProductsForm formSubmit={formSubmit}/>
      <br/>
    </div>
  );
};

export default AddProducts;
