import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as yup from 'yup'

const Register = (props) => {
    const initialValues = {
        username : '',
        email : '',
        password : '',
        businessName : '',
        address : ''
    }
    const onSubmit = (values,onSubmitProps) => {
        console.log('formData',values)
        onSubmitProps.resetForm()
    }
    const validationSchema = yup.object().shape({
        username : yup.string().required('required').min(4,'username must be minimum 4 characters long').max(64,'username should not be more than 64 characters long'),
        email : yup.string().required('required').email('invalid email format'),
        password : yup.string().required('required').min(8,'password must be minimum 8 characters long').max(128,'password should not be more than 128 characters long'),
        businessName : yup.string().required('required'),
        address : yup.string().required('required')
    })

  return (
    <div>
        <h1> Register </h1>
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
        >
            <Form>
                <label htmlFor='username'> Username </label><br/>
                <Field type='text' id='username' name='username'/>
                <ErrorMessage name='username' component='span'/>
                <br/>
                <label htmlFor='email'> Email </label><br/>
                <Field type='text' id='email' name='email'/>
                <ErrorMessage name='email' component='span'/>
                <br/>
                <label htmlFor='password'> Password </label><br/>
                <Field type='text' id='password' name='password'/>
                <ErrorMessage name='password' component='span'/>
                <br/>
                <label htmlFor='businessName'> Business Name </label><br/>
                <Field type='text' id='businessName' name='businessName'/>
                <ErrorMessage name='businessName' component='span'/>
                <br/>
                <label htmlFor='address'> Address </label><br/>
                <Field as='textarea' id='address' name='address'/>
                <ErrorMessage name='address' component='span'/>
                <br/>
                <button type='submit'> Register </button>
            </Form>
        </Formik>
    </div>
  )
}

export default Register