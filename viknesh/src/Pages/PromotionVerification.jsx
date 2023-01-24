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
   
    // dateOfBirth: Yup.string()
    //     .required('*Mandatory Field'),


});

const PromotionVerification = () => {

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
                            Promotion Verification
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

                                                        name="cadreNew"
                                                        label="Promoted Cadre"
                                                        disabled
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <RadiobuttonTextbox
                                                        name="cadreNewVerification"
                                                        label="Verification Status"
                                                        row
                                                        options={
                                                            [
                                                                "Incorrect",
                                                                "Correct"
                                                            ]}
                                                        textfieldName="cadreNewVerificationRemarks"
                                                        textfieldLabel="Remarks"
                                                    />
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
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="officeStatusNewVerificationRemarks"
                                                            textfieldLabel="Remarks"
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
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="parentCircleNewVerificationRemarks"
                                                            textfieldLabel="Remarks"
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
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="parentRegionNewVerificationRemarks"
                                                            textfieldLabel="Remarks"
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
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="parentDivisionNewVerificationRemarks"
                                                            textfieldLabel="Remarks"
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
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="presentDesignationNewVerificationRemarks"
                                                            textfieldLabel="Remarks"
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
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="presentRoleNewVerificationRemarks"
                                                            textfieldLabel="Remarks"
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
                                                                    "Incorrect",
                                                                    "Correct"
                                                                ]}
                                                            textfieldName="workingInAPSNewVerificationRemarks"
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

            </Container>
    

    );
};

export default PromotionVerification;