import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';



import {
    Container,
    Grid,
    Typography,
    Paper,
    Box,



} from '@mui/material';


import Textfield from '../../components/FormsUI/Textfield/textfield-component';
import Button from '../../components/FormsUI/Button/button-component';
import RadiobuttonTextbox from '../../components/FormsUI/Radiobutton/radiobutton-textbox-component';



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

const FORM_VALIDATION = Yup.object().shape({

    employeeNumberVerification: Yup.string()
        .required('*Mandatory Field'),

    employeeNumberVerificationRemarks: Yup.string()
        .when('employeeNumberVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    employeeNameVerification: Yup.string()
        .required('*Mandatory Field'),

    employeeNameVerificationRemarks: Yup.string()
        .when('employeeNameVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    cadreVerification: Yup.string()
        .required('*Mandatory Field'),

    cadreVerificationRemarks: Yup.string()
        .when('cadreVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    officeStatusVerification: Yup.string()
        .required('*Mandatory Field'),

    officeStatusVerificationRemarks: Yup.string()
        .when('officeStatusVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    parentCircleVerification: Yup.string()
        .required('*Mandatory Field'),

    parentCircleVerificationRemarks: Yup.string()
        .when('parentCircleVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    parentRegionVerification: Yup.string()
        .required('*Mandatory Field'),

    parentRegionVerificationRemarks: Yup.string()
        .when('parentRegionVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    parentDivisionVerification: Yup.string()
        .required('*Mandatory Field'),

    parentDivisionVerificationRemarks: Yup.string()
        .when('parentDivisionVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    fatherNameVerification: Yup.string()
        .required('*Mandatory Field'),

    fatherNameVerificationRemarks: Yup.string()
        .when('fatherNameVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    spouseNameVerification: Yup.string()
        .required('*Mandatory Field'),

    spouseNameVerificationRemarks: Yup.string()
        .when('spouseNameVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    maritalStatusVerification: Yup.string()
        .required('*Mandatory Field'),

    maritalStatusVerificationRemarks: Yup.string()
        .when('maritalStatusVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    dateOfBirthVerification: Yup.string()
        .required('*Mandatory Field'),

    dateOfBirthVerificationRemarks: Yup.string()
        .when('dateOfBirthVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    genderVerification: Yup.string()
        .required('*Mandatory Field'),

    genderVerificationRemarks: Yup.string()
        .when('genderVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    categoryVerification: Yup.string()
        .required('*Mandatory Field'),

    categoryVerificationRemarks: Yup.string()
        .when('categoryVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    presentDesignationVerification: Yup.string()
        .required('*Mandatory Field'),

    presentDesignationVerificationRemarks: Yup.string()
        .when('presentDesignationVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    dccsVerification: Yup.string()
        .required('*Mandatory Field'),

    dccsVerificationRemarks: Yup.string()
        .when('dccsVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    dateOfJoiningThePresentCadreVerification: Yup.string()
        .required('*Mandatory Field'),

    dateOfJoiningThePresentCadreVerificationRemarks: Yup.string()
        .when('dateOfJoiningThePresentCadreVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    personWithDisabilityVerification: Yup.string()
        .required('*Mandatory Field'),

    personWithDisabilityVerificationRemarks: Yup.string()
        .when('personWithDisabilityVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    disabilityDetailsVerification: Yup.string()
        .required('*Mandatory Field'),

    disabilityDetailsVerificationRemarks: Yup.string()
        .when('disabilityDetailsVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),



    workingInAPSVerification: Yup.string()
        .required('*Mandatory Field'),

    workingInAPSVerificationRemarks: Yup.string()
        .when('workingInAPSVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),



    presentRoleVerification: Yup.string()
        .required('*Mandatory Field'),

    presentRoleVerificationRemarks: Yup.string()
        .when('presentRoleVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),



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

                    <Typography component="h1" variant="h3"
                        sx={{
                            margin: "3rem",
                        }}
                    >
                        Profile Verification
                    </Typography>

                    <Container maxWidth="xl">
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
                                <div>

                                    <Formik
                                        initialValues={{ ...INITIAL_FORM_STATE }}
                                        validationSchema={FORM_VALIDATION}
                                        // onSubmit={values => {
                                        //     console.log(values);
                                        // }}

                                        onSubmit=
                                        {(values) => {
                                            console.log(values);
                                            const fileData = JSON.stringify(values);
                                            const blob = new Blob([fileData], { type: "text/plain" });
                                            const url = URL.createObjectURL(blob);
                                            const link = document.createElement('a');
                                            link.download = `${values.employeeNumber}-${values.employeeName}-ProfileVerification.json`;
                                            link.href = url;
                                            link.click();
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
                                                                "Correct",
                                                                "Incorrect"

                                                            ]}
                                                        textfieldName="employeeNumberVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="employeeNameVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="officeStatusVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="cadreVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]
                                                        }
                                                        textfieldName="parentCircleVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="parentRegionVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="parentDivisionVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="dateOfBirthVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="fatherNameVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="genderVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="maritalStatusVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="spouseNameVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="categoryVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="presentDesignationVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="presentRoleVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="dccsVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="dateOfJoiningThePresentCadreVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="personWithDisabilityVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="disabilityDetailsVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="workingInAPSVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
                                                    />
                                                </Grid>



                                                <Grid container justifyContent="center" spacing={3} marginTop={2}>
                                                    <Grid item xs={4} >
                                                        <Button type='submit'
                                                        color = 'success' >

                                                            Verified Successfully
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4} >
                                                        <Button type='submit'
                                                        color = 'warning'>
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

        </Container>


    );
};

export default ProfileVerification;