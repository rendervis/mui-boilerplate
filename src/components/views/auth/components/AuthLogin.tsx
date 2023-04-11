import { useState } from 'react'
import { useSelector } from 'react-redux'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material'

// third party
import * as Yup from 'yup'
import { useFormik } from 'formik'

// project imports
import useScriptMountedRef from '@src/hooks/useScriptMountedRef'
import { selectUserLoading, selectAuthErrors } from '@store/slices/localAuth/selectors'
import { loginUser } from '@store/slices/localAuth/actions'
import { AnimateButton } from '@components/ui/buttons'

// assets
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import Google from '@src/assets/images/icons/social-google.svg'
import { useAppDispatch } from '@store/index'
import { useNavigate } from 'react-router-dom'

export interface IFormData {
    email: string
    password: string
}
// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = ({ ...others }) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const mountedRef = useScriptMountedRef()
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))
    const [checked, setChecked] = useState(true)

    const loading = useSelector(selectUserLoading)
    const error = useSelector(selectAuthErrors)
    const dispatch = useAppDispatch()

    const googleHandler = async () => {
        console.error('Login')
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault()
    }

    const formik = useFormik({
        initialValues: {
            email: 'info@codedthemes.com',
            password: '123456'
            // submit: null
        } as IFormData,
        validationSchema: Yup.object({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
        }),
        onSubmit: async (formData: IFormData, helpers) => {
            try {
                formData && dispatch(loginUser({ formData }))
                navigate('/')
            } catch (err: any) {
                helpers.setStatus({ success: false })
                helpers.setErrors({ email: err?.message, password: err?.message })
                helpers.setSubmitting(false)
            }
        }
    })

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            variant="outlined"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Sign in with Google
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${theme.custom.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign in with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <form noValidate onSubmit={formik.handleSubmit} {...others}>
                <FormControl fullWidth error={Boolean(formik.touched.email && formik.errors.email)} sx={{ ...theme.custom.customInput }}>
                    <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-email-login"
                        type="email"
                        value={formik.values.email}
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        label="Email Address / Username"
                        inputProps={{}}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                            {formik.errors.email as string}
                        </FormHelperText>
                    )}
                </FormControl>

                <FormControl
                    fullWidth
                    error={Boolean(formik.touched.password && formik.errors.password)}
                    sx={{ ...theme.custom.customInput }}
                >
                    <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={showPassword ? 'text' : 'password'}
                        value={formik.values.password}
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="large"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        inputProps={{}}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <FormHelperText error id="standard-weight-helper-text-password-login">
                            {formik.errors.password}
                        </FormHelperText>
                    )}
                </FormControl>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                                name="checked"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                        Forgot Password?
                    </Typography>
                </Stack>

                <Box sx={{ mt: 2 }}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={formik.isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Sign in
                        </Button>
                    </AnimateButton>
                </Box>
            </form>
        </>
    )
}

export default AuthLogin
