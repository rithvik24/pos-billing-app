import React, { useEffect,useState } from "react";
import { Box,TextField } from '@mui/material'
import Grid2  from '@mui/material/Unstable_Grid2'
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
    <Box mt={'100px'} ml={'85px'}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <TextField sx={{width:'312px'}} type='text' placeholder="search by name" value={search} onChange={handleChange}/>
        </Grid2>
        <Grid2 xs={6}>
          <ProductsList products = {productsInCurrentPage} search={search}/>
          <Pagination totalItems = {products.data.length} itemsPerPage={productsPerPage} handlePagination={handlePagination}/>
        </Grid2>
        <Grid2 xs={6}>
          <AddProducts />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProductsContainer;
