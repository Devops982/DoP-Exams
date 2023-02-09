import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
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

  "country_code": "",
  "country_name": "",
  "city": "",
  "postal": "",
  "latitude": "",
  "longitude": "",
  "IPv4": "",
  "state": ""
};



const IPDetails = () => {


  const [countrycode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [city, setCity] = useState("");

  const [postal, setPostal] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [state, setState] = useState("");

  const [ip, setIP] = useState("");


  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");

    
    console.log(res.data);
    setIP(res.data.IPv4);
    setCity(res.data.city);
    setCountryCode(res.data.country_code);
    setCountryName(res.data.country_name);
    setPostal(res.data.postal);
    setLatitude(res.data.latitude);
    setLongitude(res.data.longitude);
    setState(res.data.state);


  }

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <Container component={"main"} maxWidth="sm">
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
          <Typography
            component="h1"
            variant="h3"
            sx={{
              margin: "1rem",
            }}
          >
            IP  Details
          </Typography>

          <Container maxWidth="xl">
            <Grid container spacing={2} >
              <Grid item xs={12} md={12} >
                <div>
                  <Formik initialValues={{ ...INITIAL_FORM_STATE }}>
                    <Form>

                      {/* <h2>IP: {ip}</h2>
                      <h4>{city},{state},{countrycode}, {postal} </h4>
                      <h5>Latitude: {latitude}, Longitude: {longitude}</h5> */}

                      <Grid container spacing={2}>

                      <Grid item xs={6}>
                        <Textfield
                          name="ip"
                          label="IP"
                          disabled
                          value = {ip}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          name="city"
                          label="City"
                          disabled
                          value={city}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield
                          name="state"
                          label="State"
                          disabled
                          value={state}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield
                          name="countrycode"
                          label="Country Code"
                          disabled
                          value={countrycode}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield
                          name="postal"
                          label="Postal Code"
                          disabled
                          value={postal}
                        />
                      </Grid>

                        <Grid item xs={6}>
                         
                         {/* /* Empty*/ }
                        </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          name="latitude"
                          label="latitude"
                          disabled
                          value={latitude}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield
                          name="longitude"
                          label="Longitude"
                          disabled
                          value={longitude}
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

export default IPDetails;