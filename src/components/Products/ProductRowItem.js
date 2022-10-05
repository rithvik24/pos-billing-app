import React from "react";
import { useDispatch } from "react-redux";
import { asyncRemoveProduct, asyncShowProductDetails } from "../../actions/productsActions";

const ProductRowItem = (props) => {
  const { product, handleEdit} = props;
  const dispatch = useDispatch()
  
  const handleRemove = () => {
    const confirmRemove = window.confirm('Are you sure?')
    if(confirmRemove){
        dispatch(asyncRemoveProduct(product._id))
    }
  }

  const showProductDetails = () => {
    dispatch(asyncShowProductDetails(product._id))
  }

  return (
    <tr>
      <td> {product.name} </td>
      <td> {product.price} </td>
      <td>
        <button type="button" onClick={showProductDetails}> details </button>
        <button type="button" onClick={ () => {handleEdit(product)} }> edit </button>
        <button type="button" onClick={handleRemove}> remove </button>
      </td>
    </tr>
  );
};

export default ProductRowItem;
