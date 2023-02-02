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

    reportName: "",
    
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

const ReportsDashboard = () => {

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
                        Reports Dashboard
                    </Typography>

                    <Container maxWidth="xl">
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
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
                                            link.download = `${values.employeeNumber}-${values.employeeName}-UserManagement.json`;
                                            link.href = url;
                                            link.click();
                                        }}


                                    >
                                        <Form>

                                            <Grid container spacing={8} justifyItems = "center">

                                                <Grid item xs={6}>
                                                    <Select
                                                        name="reportName"
                                                        label="Report Name"
                                                        options={["Report 1", "Report 2", "Report 3", "Others"]}
                                                    />
                                                </Grid>

                                              

                                                




                                                <Grid container justifyContent="center" spacing={3} marginTop={2}>
                                                    <Grid item xs={6} >
                                                        <Button type='submit'>
                                                           View Report
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

export default ReportsDashboard;