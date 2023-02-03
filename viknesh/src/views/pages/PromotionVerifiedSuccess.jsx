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
    employeeNumber: "",
    employeeName: "",
    cadre: "",
    cadreNew:"",
    cadreNewVerification: "",
    cadreNewVerificationRemarks: "",

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


const PromotionVerifiedSuccess = () => {

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
                            Promotion Verified Profile
                        </Typography>

                        <Container maxWidth="xl">
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={12}>
                                    <div>

                                        <Formik
                                            initialValues={{ ...INITIAL_FORM_STATE }}
                                   
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
                                                    <Textfield

                                                        name="cadreNew"
                                                        label="Promoted Cadre"
                                                        disabled
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
                                                    <Textfield

                                                        name="officeStatusNew"
                                                        label="New Office Status"
                                                        disabled
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
                                                    <Textfield

                                                        name="parentCircleNew"
                                                        label="New Parent Circle"
                                                        disabled
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
                                                    <Textfield

                                                        name="parentRegionNew"
                                                        label="New Parent Region"
                                                        disabled
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
                                                <Textfield

                                                    name="parentDivisionNew"
                                                    label="New Parent Division"
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
                                                        name="presentDesignationNew"
                                                        label="New Designation"
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

                                                        name="presentRole"
                                                        label="New Role"
                                                        disabled
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
                                                    <Textfield

                                                        name="workingInAPSNew"
                                                        label="Transfer from/to APS"
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

export default PromotionVerifiedSuccess;