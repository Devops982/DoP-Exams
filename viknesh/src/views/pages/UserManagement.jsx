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

const theme = createTheme();
const INITIAL_FORM_STATE = {

    officeName: "",
    email: "",
    emailNew: "",
    emailNewOption: "",
    mobileNumber: "",
    mobileNumberNew: "",
    mobileNumberNewOption: "",
};

const FORM_VALIDATION = Yup.object().shape({


    emailNew: Yup.string()
        .when('emailNewOption', {
            is: (val) => val === "Yes",
            then: Yup.string()
                .email('Invalid email.')
                .required('*Mandatory Field'),
        }
        ),


    mobileNumberNew: Yup.string()
        .when('mobileNumberNewOption', {
            is: (val) => val === "Yes",
            then: Yup.string()
                .required('*Mandatory Field')
                .matches(/^[0-9]+$/, "Enter valid Mobile Number")
                .min(10, 'Mobile Number should be exactly 10 digits')
                .max(10, 'Mobile Number should be exactly 10 digits'),
        }
        ),



});

const UserManagement = () => {

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
                        User Management ( Resetting of Email ID /Phone Number)
                    </Typography>

                    <Container maxWidth="xl">
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
                                <div>

                                    <Formik
                                        initialValues={{ ...INITIAL_FORM_STATE }}
                                        validationSchema={FORM_VALIDATION}
                                        validateOnMount
                                        onSubmit=
                                        {(values) => {
                                            console.log(values);
                                            const fileData = JSON.stringify(values);
                                            const blob = new Blob([fileData], { type: "text/plain" });
                                            const url = URL.createObjectURL(blob);
                                            const link = document.createElement('a');
                                            link.download = `${values.employeeNumber}-${values.employeeName}-UserManagement.json`;
                                            link.href = url;
                                            link.click();
                                        }}


                                    >
                                        <Form>

                                            <Grid container spacing={2}>

                                                <Grid item xs={6}>
                                                    <Select
                                                        name="officeName"
                                                        label="Office Name"
                                                        options={["Circle Office", "Regional Office", "Divisional Office", "Others"]}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    {/* Empty  */}
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield
                                                        name="email"
                                                        label="Email"
                                                        disabled

                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield
                                                        name="mobileNumber"
                                                        label="Mobile Number"
                                                        disabled
                                                    />
                                                </Grid>



                                                <Grid item xs={10} align='left'>
                                                    <RadiobuttonTextbox
                                                        name="emailNewOption"
                                                        label="Modify Email"
                                                        row
                                                        options={
                                                            [
                                                                "Yes",
                                                                "No"
                                                            ]}
                                                        textfieldName="emailNew"
                                                        textfieldLabel="New Email"
                                                        textfieldCondition='Yes'
                                                    />
                                                </Grid>

                                                <Grid item xs={10} align='left'>
                                                    <RadiobuttonTextbox
                                                        name="mobileNumberNewOption"
                                                        label="Modify Mobile Number"
                                                        row
                                                        options={
                                                            [
                                                                "Yes",
                                                                "No"
                                                            ]}
                                                        textfieldName="mobileNumberNew"
                                                        textfieldLabel="New Mobile Number"
                                                        textfieldCondition='Yes'
                                                    />
                                                </Grid>





                                                <Grid container justifyContent="center" spacing={3} marginTop={2}>
                                                    <Grid item xs={6} >
                                                        <Button type='submit'>
                                                            Modify Details
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

export default UserManagement;