import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { asyncGetPorducts } from "../../actions/productsActions";
import AddProducts from "./AddProducts";
import ProductsList from "./ProductsList";
import Pagination from "../Pagination"

const ProductsContainer = (props) => {
  const [ search, setSearch ] = useState('')
  const [ currentPage, setCurrentPage] = useState(1)
  const [ productsPerPage ] = useState(10)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetPorducts());
  }, [dispatch]);

  const { products } = useSelector((state) => {
    return state
  })
  const indexOfLastProduct = productsPerPage * currentPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const productsInCurrentPage =  products.data.slice(indexOfFirstProduct,indexOfLastProduct)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handlePagination = (pageNumber) => {setCurrentPage(pageNumber)}

  return (
    <div>
      <AddProducts />
      <input type='text' placeholder="search by name" value={search} onChange={handleChange}/>
      <ProductsList products = {productsInCurrentPage} search={search}/>
      <Pagination totalItems = {products.data.length} itemsPerPage={productsPerPage} handlePagination={handlePagination}/>
    </div>
  );
};

export default ProductsContainer;
