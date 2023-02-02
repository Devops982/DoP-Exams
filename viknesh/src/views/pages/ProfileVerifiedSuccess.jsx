import React, { useState } from 'react';
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


import Textfield from '../../components/FormsUI/Textfield/textfield-component';
import TextfieldPassword from '../../components/FormsUI/Textfield/textfield-password-component';
import Select from '../../components/FormsUI/Select/select-component';
import DateTimePicker from '../../components/FormsUI/DataTimePicker/datepicker-component';
import Checkbox from '../../components/FormsUI/Checkbox/checkbox-component';
import Button from '../../components/FormsUI/Button/button-component';
import Radiobutton from '../../components/FormsUI/Radiobutton/radiobutton-component';
import RadiobuttonTextbox from '../../components/FormsUI/Radiobutton/radiobutton-textbox-component';
import Sidedrawer from '../../components/FormsUI/Sidedrawer/SidedrawerAdmin-component';


const INITIAL_FORM_STATE = {
    employeeNumber: "",
    employeeNumberVerification: "",
    employeeNumberVerificationRemarks: "",
    employeeName: "",
    employeeNameVerification: "",
    employeeNameVerificationRemarks: "",
    cadre: "",
    cadreVerification: "",
    cadreVerificationRemarks: "",
    officeStatus: "",
    officeStatusVerification: "",
    officeStatusVerificationRemarks: "",
    parentCircle: "",
    parentCircleVerification: "",
    parentCircleVerificationRemarks: "",
    parentRegion: "",
    parentRegionVerification: "",
    parentRegionVerificationRemarks: "",
    parentDivision: "",
    parentDivisionVerification: "",
    parentDivisionVerificationRemarks: "",
    fatherName: "",
    fatherNameVerification: "",
    fatherNameVerificationRemarks: "",
    spouseName: "",
    spouseNameVerification: "",
    spouseNameVerificationRemarks: "",
    maritalStatus: "",
    maritalStatusVerification: "",
    maritalStatusVerificationRemarks: "",
    dateOfBirth: "",
    dateOfBirthVerification: "",
    dateOfBirthVerificationRemarks: "",
    gender: "",
    genderVerification: "",
    genderVerificationRemarks: "",
    category: "",
    categoryVerification: "",
    categoryVerificationRemarks: "",
    presentDesignation: "",
    presentDesignationVerification: "",
    presentDesignationVerificationRemarks: "",
    dccs: "",
    dccsVerification: "",
    dccsVerificationRemarks: "",
    dateOfJoiningThePresentCadre: "",
    dateOfJoiningThePresentCadreVerification: "",
    dateOfJoiningThePresentCadreVerificationRemarks: "",
    personWithDisability: "",
    personWithDisabilityVerification: "",
    personWithDisabilityVerificationRemarks: "",
    disabilityDetails: "",
    disabilityDetailsVerification: "",
    disabilityDetailsVerificationRemarks: "",
    workingInAPS: "",
    workingInAPSVerification: "",
    workingInAPSVerificationRemarks: "",
    presentRole: "",
    presentRoleVerification: "",
    presentRoleVerificationRemarks: "",


};



const ProfileVerifiedSuccess = () => {

    return (
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
            <Typography
              component="h1"
              variant="h3"
              sx={{
                margin: "3rem",
              }}
            >
              Verified Profile
            </Typography>

            <Container maxWidth="xl">
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <div>
                    <Formik
                      initialValues={{ ...INITIAL_FORM_STATE }}
                      //validationSchema={FORM_VALIDATION}
                      // onSubmit={values => {
                      //     console.log(values);
                      // }}

                      // onSubmit=
                      // {(values) => {
                      //     console.log(values);
                      //     const fileData = JSON.stringify(values);
                      //     const blob = new Blob([fileData], { type: "text/plain" });
                      //     const url = URL.createObjectURL(blob);
                      //     const link = document.createElement('a');
                      //     link.download = `${values.employeeNumber}-${values.employeeName}-ProfileVerification.json`;
                      //     link.href = url;
                      //     link.click();
                      //        }}
                    >
                      <Form>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Textfield
                              name="employeeNumber"
                              label="Employee Number"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="employeeName"
                              label="Employee Name"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="officeStatus"
                              label="Office Status"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield name="cadre" label="Cadre" disabled />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="parentCircle"
                              label="Parent Circle"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="parentRegion"
                              label="Parent Region"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="parentDivision"
                              label="Parent Division"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="dateOfBirth"
                              label="Date of Birth (dd/mm/yyyy)"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="fatherName"
                              label="Father Name"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield name="gender" label="Gender" disabled />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="maritalStatus"
                              label="Marital Status"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="spouseName"
                              label="Spouse Name"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="category"
                              label="Select category"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="presentDesignation"
                              label="Present Designation"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="presentRole"
                              label="Present Role"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="dccs"
                              label="DCCS (dd/mm/yyyy)"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="dateOfJoiningThePresentCadre"
                              label="Date Of Joining The Present Cadre (dd/mm/yyyy)"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="personWithDisability"
                              label="Person With Disability"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="disabilityDetails"
                              label="Disability Details"
                              disabled
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                              name="workingInAPS"
                              label="Working In APS"
                              disabled
                            />
                          </Grid>
                        </Grid>
                      </Form>
                    </Formik>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Paper>
      </Container>
    );
};

export default ProfileVerifiedSuccess;