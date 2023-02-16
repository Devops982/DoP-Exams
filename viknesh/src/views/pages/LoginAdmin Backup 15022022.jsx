import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../Images/IPlogo.png';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Footer from '../../components/Footer';
import SendIcon from '@mui/icons-material/Send';
import Textfield from '../../components/FormsUI/Textfield/textfield-component';
import TextfieldPassword from '../../components/FormsUI/Textfield/textfield-password-component';
import Button from '../../components/FormsUI/Button/button-component';



const theme = createTheme();
const INITIAL_FORM_STATE = {

  mobileNumber: "",
  otpMobile: "",
  email: "",
  otpEmail: "",
};



const FORM_VALIDATION = Yup.object().shape({

  mobileNumber: Yup.string()
    .required('*Mandatory Field')
    .matches(/^[0-9]+$/, "Enter valid Mobile Number")
    .min(10, 'Mobile Number should be exactly 10 digits')
    .max(10, 'Mobile Number should be exactly 10 digits'),

  otpMobile: Yup.string()
    .required('*Mandatory Field')
    .matches(/^[0-9]+$/, "Enter valid Mobile OTP")
    .min(6, 'Mobile OTP should be exactly 6 digits')
    .max(6, 'Mobile OTP should be exactly 6 digits'),


  email: Yup.string()
    .email('Invalid email.')
    .required('*Mandatory Field'),

  otpEmail: Yup.string()
    .required('*Mandatory Field')
    .matches(/^[0-9]+$/, "Enter valid Email OTP")
    .min(6, 'Email OTP should be exactly 6 digits')
    .max(6, 'Email OTP should be exactly 6 digits'),


});

export default function LoginEmployee() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7.5}
          sx={{
            backgroundImage: "url(/Images/SigninImage.png)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          }}
        />
        <Grid item xs={12} sm={8} md={4.5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 1,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar variant="square"
              sx={{ m: 1, width: 120, height: 72 }} src={Logo}  >

            </Avatar>
            <Typography component="h1" variant="h4">
              Administrator Login
            </Typography>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}

            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldPassword
                      name="otpEmail"
                      label="Email OTP"
                    />
                  </Grid>
                  <Grid container justifyContent="right">
                  <Grid item xs={6} mt={2} justify='center'>
                    <Button>
                      Send Email OTP
                    </Button>
                  </Grid>
                  </Grid>


                  <Grid item xs={12}>
                    <Textfield
                      name="mobileNumber"
                      label="Mobile Number"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldPassword
                      name="otpMobile"
                      label="Mobile OTP"
                    />
                  </Grid>
                  <Grid container justifyContent="right">
                  <Grid item xs={6} mt = {2} justify='center'>
                    <Button>
                      Send Mobile OTP
                    </Button>
                  </Grid>
                  </Grid>




                  <Grid container justifyContent="center">
                    <Grid item xs={6} mt={4} justify='center'>
                      <Link to="/profile">
                        <Button>
                          LOGIN
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>


                </Grid>

              </Form>
            </Formik>
            <Footer sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}