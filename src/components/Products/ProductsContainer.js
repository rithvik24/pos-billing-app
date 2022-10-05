import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { asyncGetPorducts } from "../../actions/productsActions";
import AddProducts from "./AddProducts";
import ProductsList from "./ProductsList";

const ProductsContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetPorducts());
  }, []);

  const { products } = useSelector((state) => {
    return state
  })

  return (
    <div>
      <AddProducts />
      <ProductsList products = {products.data} />
    </div>
  );
};

export default ProductsContainer;
