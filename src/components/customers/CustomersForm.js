import React,{useState} from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

const CustomersForm = (props) => {
    const [ toggle, setToggle] = useState(false)
    const { formSubmit } = props

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const initialValues = {
        name : '',
        mobile : '',
        email : ''
    }
    const onSubmit = (formData,onSubmitProps) => {
        const handleAfterAddCust = () => {
            onSubmitProps.resetForm()
            handleToggle()
        }
        formSubmit(formData,handleAfterAddCust)
    }
    const validationSchema = yup.object().shape({
        name : yup.string().required('Required'),
        mobile : yup.string().required('Required').length(10,'mobile number must be of 10 digits')
    })

  return (
    <div>
        {
            toggle ? (
                <>
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
                            <button type='submit'>Save</button>
                        </Form>
                    </Formik>
                    <button onClick={handleToggle}>cancel</button>
                </>
            ) : (
                <>
                    <button onClick={handleToggle}> Add </button>
                </>
            )
        }
    </div>
  )
}

export default CustomersForm