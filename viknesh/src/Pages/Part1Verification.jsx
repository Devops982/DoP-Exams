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
import Sidedrawer from '../Components/FormsUI/Sidedrawer/Sidedrawer-component';
import Part1VerificationComponent from '../Components/Verification/Part1Verification-component';

const Part1Verification = () => {

    return (
        <>
          
            <Container maxWidth="xl">
                <Grid container spacing={2} >
                    <Grid item xs={12} md={3} >
                        <Sidedrawer />
                    </Grid>
                    
                   <Grid item xs={12} md={9}>
                        {/* <Part1VerificationComponent /> */}
                    </Grid> 
                </Grid>
            </Container>


        </>

    )
}

export default Part1Verification