import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { asyncLoginUser } from '../../actions/userActions'

const Login = (props) => {
    const { handleIsLoggedIn } = props
    const dispatch = useDispatch()

    const initialValues = {
        email : '',
        password : ''
    }
    const onSubmit = (formdata,onSubmitProps) => {
        const handleAfterLogin = () => {
            onSubmitProps.resetForm()
            handleIsLoggedIn()
            props.history.push('/account')
        }
        dispatch(asyncLoginUser(formdata,handleAfterLogin))
    }
    const validationSchema = yup.object().shape({
        email : yup.string().required('Required').email('Invalid email fromat'),
        password : yup.string().required('Required')
    })
  return (
    <div>
        <h1> Login </h1>
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            <Form>
               <label htmlFor='email'> Email </label><br/>
               <Field type='text' id='email' name='email'/>
               <ErrorMessage name='email' component='span'/>
               <br/>
               <label htmlFor='password'> Password </label><br/>
               <Field type='text' id='password' name='password'/>
               <ErrorMessage name='password' component='span'/>
               <br/>
               <button type='submit'> Login </button>
               <button type='reset'> Cancel </button>
               <p> New user? <Link to='/register'> Register </Link> </p>
            </Form>
        </Formik>
    </div>
  )
}

export default Login