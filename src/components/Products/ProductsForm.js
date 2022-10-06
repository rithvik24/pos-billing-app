import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const ProductsForm = (props) => {
    const { formSubmit } = props

    const formik = useFormik({
        initialValues : {
            name : '',
            price : ''
        },
        onSubmit : (formData,onSubmitProps) => {
            const afterAddProducts = () => {
                onSubmitProps.resetForm()
            }
            formSubmit(formData,afterAddProducts)
        },
        validationSchema : yup.object().shape({
            name : yup.string().required('Required'),
            price : yup.string().required('Required')
        })
    })



  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <input type='text' name='name' {...formik.getFieldProps('name')}/>
            { formik.touched.name && formik.errors && <span> {formik.errors.name} </span>  }
            <input type='text' name='price' {...formik.getFieldProps('price')}/>
            { formik.touched.price && formik.errors && <span> {formik.errors.price} </span>  }
            <button type='submit'> Add </button>
        </form>
            <button onClick={() => { 
                formik.resetForm()
            }}> cancel </button>
    </div>
  )
}

export default ProductsForm