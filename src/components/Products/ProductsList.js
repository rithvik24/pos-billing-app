import React, { useState } from "react";
import { TableContainer,Table, TableHead, Paper, TableRow, TableCell, TableBody } from '@mui/material'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { asyncEditProduct, sortByNameAtoZ, sortByNameZtoA,  sortByPriceLowtoHigh, sortByPriceHighToLow} from "../../actions/productsActions";
import ProductRowItem from "./ProductRowItem";
import EditProduct from "./EditProduct";

const ProductsList = (props) => {
  const [open, setOpen] = useState(false)
  const [sortByName, setSortByName] = useState(false)
  const [sortByPrice, setSortByPrice] = useState(false)
  const [custIdEdit, setCustIdEdit] = useState('')
  const { products, search } = props;

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const passHandleClose = (handleClose) => {
      handleClose()
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    onSubmit: (values) => {
      dispatch(asyncEditProduct(values,handleCancel,passHandleClose));
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
      <form onSubmit={formik.handleSubmit}>
        <TableContainer component={Paper} sx={{ width: "650px" }}>
          <Table>
            <TableHead sx={{bgcolor: '#e0f2f1'}}>
              <TableRow>
                <TableCell onClick={handleSortByName}> Name </TableCell>
                <TableCell onClick={handleSortByPrice}> Price </TableCell>
                <TableCell> Actions </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => {
                return (
                  <React.Fragment key={product._id}>
                      {
                          product._id === custIdEdit ? (
                                  <EditProduct
                                  open={open}
                                  handleOpen={handleOpen}
                                  handleClose={handleClose}
                                  formik={formik}
                                  handleCancel = {handleCancel}
                                  passHandleClose={passHandleClose}
                                  />
                          ) : (
                                  <ProductRowItem
                                  handleOpen={handleOpen}
                                  product={product}
                                  handleEdit={handleEdit}
                                  />
                          )
                      }
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
  );
};

export default ProductsList;
