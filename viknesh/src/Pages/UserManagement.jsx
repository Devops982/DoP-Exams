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

    officeName: "",
    email: "",
    emailNew: "",
    emailNewOption: "",
    mobileNumber: "",
    mobileNumberNew: "",
    mobileNumberOption: "",
    };

const FORM_VALIDATION = Yup.object().shape({

    // dateOfBirth: Yup.string()
    //     .required('*Mandatory Field'),


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

                    <Typography component="h1" variant="h5"
                        sx={{
                            margin: "3rem",
                        }}
                    >
                        User Management ( Resetting of Email ID /Phone Number)
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
                                                    />
                                                </Grid>

                                                <Grid item xs={10} align='left'>
                                                    <RadiobuttonTextbox
                                                        name="monileNumberNewOption"
                                                        label="Modify Mobile Number"
                                                        row
                                                        options={
                                                            [
                                                                "Yes",
                                                                "No"
                                                            ]}
                                                        textfieldName="mobileNumberNew"
                                                        textfieldLabel="New Mobile Number"
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