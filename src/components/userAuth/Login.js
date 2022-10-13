import React from 'react'
import { Typography, Box , Stack, TextField, Button} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { asyncLoginUser } from '../../actions/userActions'
import { formBtn, textFiedWidth } from '../../helpers/styleHelpers'

const Login = (props) => {
    const { handleIsLoggedIn } = props
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        onSubmit : (formdata,onSubmitProps) => {
            const handleAfterLogin = () => {
                onSubmitProps.resetForm()
                handleIsLoggedIn()
                props.history.push('/account')
            }
            dispatch(asyncLoginUser(formdata,handleAfterLogin))
        },
        validationSchema : yup.object().shape({
            email : yup.string().required('Required').email('Invalid email fromat'),
            password : yup.string().required('Required')
        })
    })

    const handleCancel = () => {
        formik.setValues(formik.initialValues)
    }

  return (
    <Stack sx={{marginTop : '100px', marginLeft : '1000px'}}>
        <Typography component='h1' sx={{color :'#00b8d4', fontSize: '50px' , fontWeight : 'bold'}}> Login </Typography>
        <Box component='form' onSubmit={formik.handleSubmit}>
            <Grid2 container spacing={1}>
                <Grid2 xs={12}>
                    <TextField
                    {...formik.getFieldProps('email')}
                    sx={textFiedWidth}
                    type='text' 
                    label='email' 
                    name='email' 
                    error = {formik.errors.email && formik.touched.email}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <TextField
                    {...formik.getFieldProps('password')}
                    sx={textFiedWidth} 
                    type='text' 
                    label='password' 
                    name='password' 
                    error = {formik.errors.password && formik.touched.password}
                    helperText = {formik.touched.password && formik.errors.password}
                    />
                </Grid2>
                <Grid2 xs={12}>
                    <Button type='submit' variant='contained' sx={formBtn}> Login </Button>
                </Grid2>
            </Grid2>
        </Box>
            <Button onClick={handleCancel} variant='contained' sx={{...formBtn, width : '69px',left :' 83px' , bottom : '34px'}}> Cancel </Button>
    </Stack >
  )
}

export default Login