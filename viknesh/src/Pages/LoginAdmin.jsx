import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider } from "@emotion/react";


import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Avatar,
  createTheme,
 

} from '@mui/material';



import Textfield from '../Components/FormsUI/Textfield/textfield-component';
import TextfieldPassword from '../Components/FormsUI/Textfield/textfield-password-component';
import Button from '../Components/FormsUI/Button/button-component';

// const useStyles = makeStyles((theme) => ({
//   formWrapper: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(8),
//   },
// }));

const theme = createTheme();

// const INITIAL_FORM_STATE = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   addressLine1: '',
//   addressLine2: '',
//   city: '',
//   state: '',
//   country: '',
//   arrivealDate: '',
//   departureDate: '',
//   message: '',
//   termsOfService: false
// };
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



const LoginAdmin = () => {
  //const classes = useStyles();

  return (


    <ThemeProvider theme={theme}>
      <Container component={"main"} maxWidth="xs">
        {/* <CssBaseline /> */}
        <Paper
          elevation={5}
          sx={{
            padding: "2rem",
            marginTop: "1rem",
            border: "1px solid #2673E2",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar
              variant="circle"
              sx={{ width: 120, height: 100, marginBottom :3 }}
              alt="India Post"

            /> */}
            <Grid item xs={12} mt = {3} mb = {2}>
              <Typography component="h1" variant="h6">
                ADMINISTRATOR LOGIN
              </Typography>
            </Grid>
           

            <Grid container>
              <Grid item xs={12}>
                <Container maxWidth="xl">
                  {/* <div className={classes.formWrapper}> */}
                  <div>

                    <Formik
                      initialValues={{...INITIAL_FORM_STATE}}
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

                                                                  


                       
                          <Grid container justifyContent="center">
                            <Grid item xs={6}  mt = {4} justify='center'>
                              <Button>
                                LOGIN
                              </Button>
                            </Grid>
                          </Grid>


                        </Grid>

                      </Form>
                    </Formik>

                  </div>
                </Container>
              </Grid>
            </Grid>

          </Box>
        </Paper>

      </Container>
    </ThemeProvider>
  );
};

export default LoginAdmin;
