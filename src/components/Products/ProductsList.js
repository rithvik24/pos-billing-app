import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { asyncEditProduct, sortByNameAtoZ, sortByNameZtoA,  sortByPriceLowtoHigh, sortByPriceHighToLow} from "../../actions/productsActions";
import ProductRowItem from "./ProductRowItem";
import EditProduct from "./EditProduct";

const ProductsList = (props) => {
  const [sortByName, setSortByName] = useState(false)
  const [sortByPrice, setSortByPrice] = useState(false)
  const [custIdEdit, setCustIdEdit] = useState('')
  const { products, search } = props;

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

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))

  const handleSortByName = () => {
    const toggleSortByName = sortByName
    setSortByName(!toggleSortByName)

    if(toggleSortByName){
      dispatch(sortByNameAtoZ())
    }else{
      dispatch(sortByNameZtoA())
    }
  }

  const handleSortByPrice = () => {
    const toggleSortByPrice = sortByPrice
    setSortByPrice(!toggleSortByPrice)
    if(toggleSortByPrice){
      dispatch(sortByPriceLowtoHigh())
    }else{
      dispatch(sortByPriceHighToLow())
    }
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <table border="1px">
          <thead>
            <tr>
              <th onClick={handleSortByName}> Name </th>
              <th onClick={handleSortByPrice}> Price </th>
              <th> Actions </th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => {
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
