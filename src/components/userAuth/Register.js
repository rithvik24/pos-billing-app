import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { asyncRegisterUser } from '../../actions/userActions'

const Register = (props) => {
    const dispatch = useDispatch()

    const initialValues = {
        username : '',
        email : '',
        password : '',
        businessName : '',
        address : ''
    }
    const onSubmit = (formData,onSubmitProps) => {
        const handleAfterRegister = () => {
            onSubmitProps.resetForm()
            props.history.push('/login')
        }
        dispatch(asyncRegisterUser(formData,handleAfterRegister))
    }
    const validationSchema = yup.object().shape({
        username : yup.string().required('Required').min(4,'username must be minimum 4 characters long').max(64,'username should not be more than 64 characters long'),
        email : yup.string().required('Required').email('invalid email format'),
        password : yup.string().required('Required').min(8,'password must be minimum 8 characters long').max(128,'password should not be more than 128 characters long'),
        businessName : yup.string().required('Required'),
        address : yup.string().required('Required')
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
                <br/>
                <p>Already have a account? <Link to='/login'> Login </Link> </p>
            </Form>
        </Formik>
    </div>
  )
}

export default Register