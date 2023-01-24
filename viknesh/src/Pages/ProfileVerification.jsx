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


import Textfield from '../Components/FormsUI/Textfield/textfield-component';
import TextfieldPassword from '../Components/FormsUI/Textfield/textfield-password-component';
import Select from '../Components/FormsUI/Select/select-component';
import DateTimePicker from '../Components/FormsUI/DataTimePicker/datepicker-component';
import Checkbox from '../Components/FormsUI/Checkbox/checkbox-component';
import Button from '../Components/FormsUI/Button/button-component';
import Radiobutton from '../Components/FormsUI/Radiobutton/radiobutton-component';
import RadiobuttonTextbox from '../Components/FormsUI/Radiobutton/radiobutton-textbox-component';
import Sidedrawer from '../Components/FormsUI/Sidedrawer/SidedrawerAdmin-component';


const INITIAL_FORM_STATE = {
    employeeNumber: "",
    employeeNumberVerification: "",
    employeeNumberVerificationRemarks: "",
    employeeName: "",
    employeeNameVerification: "",
    employeeNameRemarks: "",
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

 
    email: Yup.string()
        .email('Invalid email.')
        .required('*Mandatory Field'),

    otpEmail: Yup.string()
        .required('*Mandatory Field')
        .matches(/^[0-9]+$/, "Enter valid Email OTP")
        .min(6, 'Email OTP should be exactly 6 digits')
        .max(6, 'Email OTP should be exactly 6 digits'),

    cadre: Yup.string()
        .required('*Mandatory Field'),

    officeStatus: Yup.string()
        .required('*Mandatory Field'),

    parentCircle: Yup.string()
        .required('*Mandatory Field'),

    parentRegion: Yup.string()
        .required('*Mandatory Field'),

    parentDivision: Yup.string()
        .required('*Mandatory Field'),

    fatherName: Yup.string()
        .required('*Mandatory Field')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .min(3, 'Father Name should be minimum 3 characters')
        .max(50, 'Father Name should be maximum 50 characters'),



    maritalStatus: Yup.string()
        .required('*Mandatory Field'),

    spouseName: Yup.string()
        .when('maritalStatus', {
            is: (val) => val === '0',
            then: Yup.string()
                .required('*Mandatory Field')
                .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                .min(3, 'Spouse Name should be minimum 3 characters')
                .max(50, 'Spouse Name should be maximum 50 characters'),
        }
        ),

    dateOfBirth: Yup.string()
        .required('*Mandatory Field'),


});

const ProfileVerification = () => {

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

                        <Typography component="h1" variant="h5"
                            sx={{
                                margin: "3rem",
                            }}
                        >
                            Profile Verification
                        </Typography>

                        <Container maxWidth="xl">
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={3} >
                                    <Sidedrawer />
                                </Grid>

                                <Grid item xs={12} md={9}>
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

                                                    <Grid item xs={5}>
                                                        <Textfield
                                                            name="employeeNumber"
                                                            label="Employee Number"
                                                            disabled

                                                        />
                                                    </Grid>
                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="employeeNumberVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="employeeNumberVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield
                                                            name="employeeName"
                                                            label="Employee Name"
                                                            disabled
                                                        />
                                                    </Grid>
                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="employeeNameVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="employeeNameVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>





                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="officeStatus"
                                                            label="Office Status"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="officeStatusVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="officeStatusVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="cadre"
                                                            label="Cadre"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="cadreVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="cadreVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>


                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="parentCircle"
                                                            label="Parent Circle"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="parentCircleVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="parentCircleVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>


                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="parentRegion"
                                                            label="Parent Region"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="parentRegionVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="parentRegionVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>


                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="parentDivision"
                                                            label="Parent Division"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="parentDivisionVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="parentDivisionVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="dateOfBirth"
                                                            label="Date of Birth (dd/mm/yyyy)"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="dateOfBirthVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="dateOfBirthVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="fatherName"
                                                            label="Father Name"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="fatherNameVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="fatherNameVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>


                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="gender"
                                                            label="Gender"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="genderVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="genderVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>


                                                    <Grid item xs={5}>
                                                        <Textfield
                                                            name="maritalStatus"
                                                            label="Marital Status"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="maritalStatusVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="maritalStatusVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>


                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="spouseName"
                                                            label="Spouse Name"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="spouseNameVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="spouseNameVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="category"
                                                            label="Select category"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="categoryVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="categoryVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield
                                                            name="presentDesignation"
                                                            label="Present Designation"
                                                            disabled
                                                        />
                                                    </Grid>


                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="presentDesignationVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="presentDesignationVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>


                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="presentRole"
                                                            label="Present Role"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="presentRoleVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="presentRoleVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="dccs"
                                                            label="DCCS (dd/mm/yyyy)"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="dccsVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="dccsVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield
                                                            name="dateOfJoiningThePresentCadre"
                                                            label="Date Of Joining The Present Cadre (dd/mm/yyyy)"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="dateOfJoiningThePresentCadreVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="dateOfJoiningThePresentCadreVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>
                                          
                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="personWithDisability"
                                                            label="Person With Disability"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="personWithDisabilityVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="personWithDisabilityVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Textfield

                                                           name="disabilityDetails"
                                                            label="Disability Details"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="disabilityDetailsVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="disabilityDetailsVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                                               
                                                    <Grid item xs={5}>
                                                        <Textfield

                                                            name="workingInAPS"
                                                            label="Working In APS"
                                                            disabled
                                                        />
                                                    </Grid>

                                                    <Grid item xs={7}>
                                                        <RadiobuttonTextbox
                                                            name="workingInAPSVerification"
                                                            label="Verification Status"
                                                            row
                                                            options={
                                                                [
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="workingInAPSVerificationRemarks"
                                                            textfieldLabel="Remarks"
                                                        />
                                                    </Grid>

                             
                                           
                                                    <Grid container justifyContent="center" spacing={3} marginTop = {2}>
                                                        <Grid item xs={4} >
                                                            <Button type='submit' >
                                                                                                                            
                                                                Verified Successfully
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={4} >
                                                            <Button type='submit'>
                                                                Allow Resubmission
                                                            </Button>
                                                        </Grid>
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

            </Container >
    

    );
};

export default ProfileVerification;