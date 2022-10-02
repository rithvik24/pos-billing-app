import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

const CustomersForm = (props) => {
    const { formSubmit } = props

    const initialValues = {
        name : '',
        mobile : '',
        email : ''
    }
    const onSubmit = (formData,onSubmitProps) => {
        const handleAfterAddCust = () => {
            onSubmitProps.resetForm()
        }
        formSubmit(formData,handleAfterAddCust)
    }
    const validationSchema = yup.object().shape({
        name : yup.string().required('Required'),
        mobile : yup.string().required('Required').length(10,'mobile number must be of 10 digits')
    })

  return (
    <div>
        <Formik 
        initialValues={initialValues}
        onSubmit = {onSubmit}
        validationSchema={validationSchema}
        > 
            <Form>
                <Field type='text' placeholder='name*' name='name'/>
                <ErrorMessage name='name' component='span'/>
                <Field type='text' placeholder='mobile*' name='mobile'/>
                <ErrorMessage name='mobile' component='span'/>
                <Field type='text' placeholder='email' name='email'/>
                <button type='submit'>Add</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CustomersForm