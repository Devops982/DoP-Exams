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

    officeList: "",
    email: "",
    mobileNumber: "",
    lastlogin: "",

};

const FORM_VALIDATION = Yup.object().shape({

    // dateOfBirth: Yup.string()
    //     .required('*Mandatory Field'),


});

const AdminProfile = () => {

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
                        Administrator Profile
                    </Typography>

                    <Container maxWidth="xl">
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={12} marginLeft={25}>
                                <div>
                                    <Formik
                                        initialValues={{ ...INITIAL_FORM_STATE }}
                                    >
                                        <Form>

                                            <Grid container spacing={2} >


                                                <Grid item xs={8}>
                                                    <Select
                                                        name="officeList"
                                                        label="List of Offices being managed"
                                                        options={[
                                                            "Circle Office",
                                                            "Regional Office",
                                                            "Divisional Office",
                                                            "Others"
                                                        ]}
                                                    />
                                                </Grid>

                                             

                                                <Grid item xs={8}>
                                                    <Textfield
                                                        name="email"
                                                        label="Email"
                                                        disabled

                                                    />
                                                </Grid>
                                              
                                                <Grid item xs={8}>
                                                    <Textfield
                                                        name="mobileNumber"
                                                        label="Mobile Number"
                                                        disabled
                                                    />
                                                </Grid>
                                             
                                                <Grid item xs={8}>
                                                    <Textfield
                                                        name="lastlogin"
                                                        label="Last Login "
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

export default AdminProfile;