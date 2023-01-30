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

const theme = createTheme();
const INITIAL_FORM_STATE = {
    employeeNumber: "",
    employeeName: "",
    cadre: "",
    officeStatus: "",
    officeStatusNew: "",
    officeStatusNewVerification: "",
    officeStatusNewVerificationRemarks: "",
    parentCircle: "",
    parentCircleNew: "",
    parentCircleNewVerification: "",
    parentCircleNewVerificationRemarks: "",
    parentRegion: "",
    parentRegionNew: "",
    parentRegionNewVerification: "",
    parentRegionNewVerificationRemarks: "",
    parentDivision: "",
    parentDivisionNew: "",
    parentDivisionNewVerification: "",
    parentDivisionNewVerificationRemarks: "",
    presentDesignation: "",
    presentDesignationNew: "",
    presentDesignationNewVerification: "",
    presentDesignationNewVerificationRemarks: "",
    workingInAPS: "",
    workingInAPSNew: "",
    workingInAPSNewVerification: "",
    workingInAPSNewVerificationRemarks: "",
    presentRole: "",
    presentRoleNew: "",
    presentRoleNewVerification: "",
    presentRoleNewVerificationRemarks: "",


};

const FORM_VALIDATION = Yup.object().shape({

    officeStatusNewVerification: Yup.string()
        .required('*Mandatory Field'),

    officeStatusNewVerificationRemarks: Yup.string()
        .when('officeStatusNewVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    parentCircleNewVerification: Yup.string()
        .required('*Mandatory Field'),

    parentCircleNewVerificationRemarks: Yup.string()
        .when('parentCircleNewVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


    parentRegionNewVerification: Yup.string()
        .required('*Mandatory Field'),

    parentRegionNewVerificationRemarks: Yup.string()
        .when('parentRegionNewVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    parentDivisionNewVerification: Yup.string()
        .required('*Mandatory Field'),

    parentDivisionNewVerificationRemarks: Yup.string()
        .when('parentDivisionNewVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),
    presentDesignationNewVerification: Yup.string()
        .required('*Mandatory Field'),

    presentDesignationNewVerificationRemarks: Yup.string()
        .when('presentDesignationNewVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    workingInAPSNewVerification: Yup.string()
        .required('*Mandatory Field'),

    workingInAPSNewVerificationRemarks: Yup.string()
        .when('workingInAPSNewVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),

    presentRoleNewVerification: Yup.string()
        .required('*Mandatory Field'),

    presentRoleNewVerificationRemarks: Yup.string()
        .when('presentRoleNewVerification', {
            is: (val) => val === "Incorrect",
            then: Yup.string()
                .required('*Mandatory Field')
                .min(5, 'Remarks should be minimum 5 characters')
                .max(200, 'Remarks should be maximum 200 characters'),
        }
        ),


});

const TransferVerification = () => {

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
                        Transfer Verification
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

                                        onSubmit=
                                        {(values) => {
                                            console.log(values);
                                            const fileData = JSON.stringify(values);
                                            const blob = new Blob([fileData], { type: "text/plain" });
                                            const url = URL.createObjectURL(blob);
                                            const link = document.createElement('a');
                                            link.download = `${values.employeeNumber}-${values.employeeName}-TransferVerification.json`;
                                            link.href = url;
                                            link.click();
                                        }}

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

                                                        name="cadre"
                                                        label="Present Cadre"
                                                        disabled
                                                    />
                                                </Grid>


                                                <Grid item xs={6}>
                                                    {/* Empty  */}
                                                </Grid>




                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="officeStatus"
                                                        label="Present Office Status"
                                                        disabled
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="officeStatusNew"
                                                        label="New Office Status"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="officeStatusNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Correct",
                                                                "Incorrect"

                                                            ]}
                                                        textfieldName="officeStatusNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
                                                    />
                                                </Grid>





                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="parentCircle"
                                                        label="Present Circle"
                                                        disabled
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="parentCircleNew"
                                                        label="New Parent Circle"
                                                        disabled
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="parentCircleNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="parentCircleNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
                                                    />
                                                </Grid>


                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="parentRegion"
                                                        label="Present Region"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="parentRegionNew"
                                                        label="New Parent Region"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="parentRegionNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="parentRegionNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
                                                    />
                                                </Grid>


                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="parentDivision"
                                                        label="Present Division"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="parentDivisionNew"
                                                        label="New Parent Division"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="parentDivisionNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="parentDivisionNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield
                                                        name="presentDesignationNew"
                                                        label="New Designation"
                                                        disabled
                                                    />
                                                </Grid>


                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="presentDesignationNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="presentDesignationNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
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
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="presentRole"
                                                        label="New Role"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="presentRoleNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="presentRoleNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
                                                    />
                                                </Grid>





                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="workingInAPS"
                                                        label="Presently Working In APS"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield

                                                        name="workingInAPSNew"
                                                        label="Transfer from/to APS"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="workingInAPSNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Correct",
                                                                "Incorrect"
                                                            ]}
                                                        textfieldName="workingInAPSNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                        textfieldCondition='Incorrect'
                                                    />
                                                </Grid>



                                                <Grid container justifyContent="center" spacing={3} marginTop={2}>
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

        </Container>


    );
};

export default TransferVerification;