import React from 'react'
import { useFormik } from 'formik'
import { Box, TextField , Stack, Button ,Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { asyncRegisterUser } from '../../actions/userActions'
import { formBtn, textFiedWidth } from '../../helpers/styleHelpers'

const Register = (props) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : {
            username : '',
            email : '',
            password : '',
            businessName : '',
            address : ''
        },
        onSubmit : (formData,onSubmitProps) => {
            const handleAfterRegister = () => {
                onSubmitProps.resetForm()
                props.history.push('/login')
            }
            dispatch(asyncRegisterUser(formData,handleAfterRegister))
        },
        validationSchema : yup.object().shape({
            username : yup.string().required('Required').min(4,'username must be minimum 4 characters long').max(64,'username should not be more than 64 characters long'),
            email : yup.string().required('Required').email('invalid email format'),
            password : yup.string().required('Required').min(8,'password must be minimum 8 characters long').max(128,'password should not be more than 128 characters long'),
            businessName : yup.string().required('Required'),
            address : yup.string().required('Required')
        })
    })

    const handleCancel = () => {
        formik.setValues(formik.initialValues)
    }

  return (
    <Stack sx={{marginTop : '100px', marginLeft : '1000px'}}>
        <Typography component='h1' sx={{color :'#00b8d4', fontSize: '50px',fontWeight:'bold'}}> Register </Typography>
        <Box component = 'form' onSubmit = {formik.handleSubmit} sx={{marginTop : '15px'}}>
            <Grid2 container spacing={1}>
                <Grid2 xs={12} >
                    <TextField 
                    sx={textFiedWidth}
                    variant='outlined' 
                    type='text' label='username' 
                    name='username' {...formik.getFieldProps('username')}
                    error = {formik.errors.username && formik.touched.username}
                    helperText = { formik.touched.username && formik.errors.username}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <TextField 
                    {...formik.getFieldProps('email')} 
                    sx={textFiedWidth}
                    variant='outlined' 
                    type='text' 
                    label='email' 
                    name='email' 
                    error = {formik.errors.email && formik.touched.email}
                    helperText = {formik.touched.email && formik.errors.email}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <TextField
                    {...formik.getFieldProps('password')}
                    sx={textFiedWidth} 
                    variant='outlined' 
                    type='password' 
                    label='password' 
                    name='password' 
                    error = {formik.errors.password && formik.touched.password}
                    helperText = {formik.touched.password && formik.errors.password}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <TextField
                    {...formik.getFieldProps('businessName')}
                    sx={textFiedWidth} 
                    variant='outlined' 
                    type='text' 
                    label='businessName' 
                    name='businessName' 
                    error = {formik.errors.businessName && formik.touched.businessName}
                    helperText = {formik.touched.businessName && formik.errors.businessName}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <TextField 
                    {...formik.getFieldProps('address')}
                    sx={textFiedWidth} 
                    multiline label='address' 
                    name='address' 
                    error = {formik.errors.address && formik.touched.address}
                    helperText = {formik.touched.address && formik.errors.address}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <Button 
                    type='submit' 
                    variant='contained' 
                    sx={formBtn}
                    > Register </Button>
                </Grid2>
            </Grid2>
        </Box>
            <Button variant='contained' sx={{...formBtn,width : '69px',left :'104px' , bottom : '33px'}} onClick={handleCancel}>
                Cancel
            </Button>
    </Stack>
  )
}

export default Register