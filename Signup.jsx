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
  Radio,
} from '@mui/material';



import Textfield from '../Components/FormsUI/Textfield/textfield-component';
import TextfieldPassword from '../Components/FormsUI/Textfield/textfield-password-component';
import Select from '../Components/FormsUI/Select/select-component';
import DateTimePicker from '../Components/FormsUI/DataTimePicker/datepicker-component';
import Checkbox from '../Components/FormsUI/Checkbox/checkbox-component';
import Button from '../Components/FormsUI/Button/button-component';

import Radiobutton from '../Components/FormsUI/Radiobutton/radiobutton-component';
import RadiobuttonTextbox from '../Components/FormsUI/Radiobutton/radiobutton-textbox-component';

const theme = createTheme();

const INITIAL_FORM_STATE = {
  employeeNumber: "",
  employeeNumberConfirmation: "",
  employeeName: "",
  employeeNameConfirmation: "",
  mobileNumber: "",
  otpMobile: "",
  email: "",
  otpEmail: "",
  cadre: "",
  officeStatus: "",
  parentCircle: "",
  parentRegion: "",
  parentDivision: "",
  fatherName: "",
  spouseName: "",
  maritalStatus: "",
  dateOfBirth: "",
  gender: "",
  category: "",
  presentDesignation: "",
  dccs: "",
  dateOfJoiningThePresentCadre: "",
  personWithDisability: "",
  disabilityDetails: "",
  workingInAPS: "",
  presentRole: "",
  termsOfService: "",
};


const FORM_VALIDATION = Yup.object().shape({

  employeeNumber: Yup.string()
    .required('*Mandatory Field')
    .matches(/^[0-9]+$/, "Enter valid Employee Number")
    .min(8, 'Employee Number should be exactly 8 digits')
    .max(8, 'Employee Number should be exactly 8 digits'),

  employeeNumberConfirmation: Yup.string()
    .required('*Mandatory Field')
    .oneOf([Yup.ref('employeeNumber'), null], "Employee Number Mismatch!")
    .min(8, 'Employee Number should be exactly 8 digits')
    .max(8, 'Employee Number should be exactly 8 digits'),

  employeeName: Yup.string()
    .required('*Mandatory Field')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .min(3, 'Employee Name should be minimum 3 characters')
    .max(50, 'Employee Name should be maximum 50 characters'),

  employeeNameConfirmation: Yup.string()
    .required('*Mandatory Field')
    .oneOf([Yup.ref('employeeName'), null], "Employee Name Mismatch!")
    .min(3, 'Employee Name should be minimum 3 characters')
    .max(50, 'Employee Name should be maximum 50 characters'),

  // mobileNumber: Yup.string()
  //   .required('*Mandatory Field')
  //   .matches(/^[0-9]+$/, "Enter valid Mobile Number")
  //   .min(8, 'Mobile Number should be exactly 10 digits')
  //   .max(8, 'Mobile Number should be exactly 10 digits'),

  // otpMobile: Yup.string()
  //   .required('*Mandatory Field')
  //   .matches(/^[0-9]+$/, "Enter valid Mobile OTP")
  //   .min(6, 'Mobile OTP should be exactly 6 digits')
  //   .max(6, 'Mobile OTP should be exactly 6 digits'),


  // email: Yup.string()
  //   .email('Invalid email.')
  //   .required('*Mandatory Field'),

  // otpEmail: Yup.string()
  //   .required('*Mandatory Field')
  //   .matches(/^[0-9]+$/, "Enter valid Email OTP")
  //   .min(6, 'Email OTP should be exactly 6 digits')
  //   .max(6, 'Email OTP should be exactly 6 digits'),

  // cadre: Yup.string()
  //   .required('*Mandatory Field'),

  // officeStatus: Yup.string()
  //   .required('*Mandatory Field'),

  // parentCircle: Yup.string()
  //   .required('*Mandatory Field'),

  // parentRegion: Yup.string()
  //   .required('*Mandatory Field'),

  // parentDivision: Yup.string()
  //   .required('*Mandatory Field'),

  // fatherName: Yup.string()
  //   .required('*Mandatory Field')
  //   .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
  //   .min(3, 'Father Name should be minimum 3 characters')
  //   .max(50, 'Father Name should be maximum 50 characters'),



  // maritalStatus: Yup.string()
  //   .required('*Mandatory Field'),

  // spouseName: Yup.string()
  //   .when('maritalStatus', {
  //     is: (val) => val === '0',
  //     then: Yup.string()
  //       .required('*Mandatory Field')
  //       .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
  //       .min(3, 'Spouse Name should be minimum 3 characters')
  //       .max(50, 'Spouse Name should be maximum 50 characters'),
  //   }
  //   ),

  dateOfBirth: Yup.string()
    .required('*Mandatory Field'),

  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});


const Signup_24012023 = () => {


  return (


    <ThemeProvider theme={theme}>
      <Container component={"main"} maxWidth="xl">

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
            <Avatar
              variant="circle"
              sx={{ width: 120, height: 100 }}
              alt="India Post"

            />
            <Typography component="h1" variant="h5">
              Profile
            </Typography>

            <Grid container>
              <Grid item xs={12}>
                <Container maxWidth="xl">
                  <div>

                    <Formik
                      initialValues={{ ...INITIAL_FORM_STATE }}
                      validationSchema={FORM_VALIDATION}
                      onSubmit={values => {
                        console.log(values);
                      }}

                    >
                      <Form>

                        <Grid container spacing={2}>

                          <Grid item xs={6}>
                            <Textfield
                              name="employeeNumber"
                              label="Employee Number"

                            />
                          </Grid>

                          <Grid item xs={6}>
                            <TextfieldPassword
                              name="employeeNumberConfirmation"
                              label="Employee Number Confirmation"

                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Textfield
                              name="employeeName"
                              label="Employee Name"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <TextfieldPassword
                              name="employeeNameConfirmation"
                              label="Employee Name Confirmation"

                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="mobileNumber"
                              label="Mobile Number"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="otpMobile"
                              label="Mobile OTP"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="email"
                              label="Email"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="otpEmail"
                              label="Email OTP"
                            />
                          </Grid>



                          <Grid item xs={6}>
                            <Select
                              name="officeStatus"
                              label="Office Status"
                              options={["Circle Office", "Regional Office", "Divisional Office", "Others"]}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Select
                              name="cadre"
                              label="Cadre"
                              options={["Postal Assistant", "Sorting Assistant", "Postman", "Mailguard"]}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Select
                              name="parentCircle"
                              label="Parent Circle"
                              options={[
                                "1.Andhra Pradesh",
                                "2.Karnataka",
                                "3.Tamilnadu",
                                "4.Kerala"

                              ]}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Select
                              name="parentRegion"
                              label="Parent Region"
                              options={[
                                "1.Region 1",
                                "2.Region 2",
                                "3.Region 3",
                                "4.Region 4"

                              ]}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Select
                              name="parentDivision"
                              label="Parent Division"
                              options={[
                                "1.Division 1",
                                "2.Division 2",
                                "3.Division 3",
                                "4.Division 4"

                              ]}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <DateTimePicker
                              name="dateOfBirth"
                              label="Date of Birth (dd/mm/yyyy)"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="fatherName"
                              label="Father Name"
                            />
                          </Grid>



                          <Grid item xs={6}>
                            <Radiobutton

                              name="gender"
                              label="Select Gender"
                              row
                              options={
                                [
                                  "Male",
                                  "Female",
                                  "Others"
                                ]}
                            />
                          </Grid>


                          <Grid item xs={6}>
                            <RadiobuttonTextbox

                              name="maritalStatus"
                              label="Marital Status"
                              row
                              options={
                                [
                                  "Married",
                                  "Unmarried"
                                ]}
                              textfieldName="spouseName"
                              textfieldLabel="Spouse Name"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Radiobutton
                              name="category"
                              label="Select category"
                              row
                              options={
                                [
                                  "UR",
                                  "OBC",
                                  "SC",
                                  "ST",
                                  "EWS"
                                ]}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="presentDesignation"
                              label="Present Designation"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Select
                              name="presentRole"
                              label="Present Role"
                              options={[
                                "1.Cashier",
                                "2.Treasurer",
                                "3.Delivery Clerk",
                                "4.Counter Clerk"

                              ]}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <DateTimePicker
                              name="dccs"
                              label="DCCS (dd/mm/yyyy)"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <DateTimePicker
                              name="dateOfJoiningThePresentCadre"
                              label="Date Of Joining The Present Cadre (dd/mm/yyyy)"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <RadiobuttonTextbox

                              name="personWithDisability"
                              label="Person With Disability"
                              row
                              options={
                                [
                                  "Yes",
                                  "No"
                                ]}
                              textfieldName="disabilityDetails"
                              textfieldLabel="Disability Details"

                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Radiobutton
                              name="workingInAPS"
                              label="Working In APS"
                              row
                              options={
                                [
                                  "Yes",
                                  "No"
                                ]}
                            />
                          </Grid>

                          {/* category:"",
                          presentDesignation:"",
                          dccs:"",
                          dateOfJoiningThePresentCadre:"",
                          personWithDisability:"",
                          workingInAPS:"",
                          presentRole:"", */}

                          <Grid item xs={12}>
                            <Checkbox
                              name="termsOfService"
                              legend="Terms Of Service"
                              label="I hereby declare that all the above furnished information are true"
                            />
                          </Grid>
                          <Grid container justifyContent="center">
                            <Grid item xs={6} justify='center'>
                              <Button type='submit'>
                                REGISTER
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

export default Signup_24012023;