import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import ProfilePicture from '../../Images/ProfilePicture.png';
import { Button,
    createTheme,
   InputAdornment,
    IconButton,
    Tooltip,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
  } from "@mui/material";
  import {
    AccountCircle,
    ClearRounded,
    DoneRounded,
    VisibilityOffRounded,
    VisibilityRounded,
  } from "@mui/icons-material";
  import { Link } from "react-router-dom";
import { useState } from 'react';
import Date from './Date';
import CircleName from '../../API/CircleName';
import Select from '@mui/material/Select';

// Function used to check the length of the string
const checkLength = ({ value, minLength, maxLength }) => {
  value = "" + value;   // used to convert as string
  const len = value.length;
  // console.log("checkLength : ", len, "value:", value);
  return len <= maxLength && len >= minLength ? true : false;
};

const numberValidation = (value) => {
  const numRegex = /^[0-9]+$/;   // Maximum no. of digits checked - for mobile
  // console.log(" numberValidation Function : ", value, "   ", numRegex.test(value));
  return value && numRegex.test(value);
};

export default function Signup(props) {
 

  const [form, setform] = useState({
    employeeNumber: "",
    employeeNumberConfirmation: "",
    employeeName: "",
    employeeNameConfirmation: "",
    mobileNumber: "",
    email: "",
    otpMobile: "",
    otpEmail: "",
    cadre: "",
    officeStatus: "",
    parentCircle: "",
    parentRegion: "",
    parentDivision: "",
    fatherName: "",
    spouseName: "",
    maritlStatus: "",
    dateOfBirth: "",
    gender: ""

  })
  const [validEmployeeNumber, setvalidEmployeeNumber] = useState({
    valid: "true",
    message: "",
  })
  const handleEmployeeNumberCheck = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log("handleEmployeeNumberCheck:", [e.target.name], e.target.value.toUpperCase());
    checkLength({ value: form.employeeNumber, minLength: 7, maxLength: 7 }) &&
    numberValidation(form.employeeNumber)
    ? setvalidEmployeeNumber({ valid: true, message: "" })
    : setvalidEmployeeNumber({
      valid: false,
      message: "Enter Valid Employee Number of 8 digits",
    });
 
  };
  const [circleName, setcircleName] = useState('')
  const [regionName, setregionName] = useState('')
  const [divisionName, setdivisionName] = useState('')
  const handleChange = (event) => {    
    setcircleName(event.target.value);
  };
  const handleChangeRegionName = (event) => {    
    setregionName(event.target.value);
  };
  const handleChangeParentDivision = (event) => {    
    setdivisionName(event.target.value);
  };
  return (
    <>
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
        <Typography component="h1" variant="h4" sx={{ pb:2.5}}>
          Part 1 Registration
        </Typography>
        <Avatar
         variant="circle"
         sx={{ width: 120, height: 100 }}
         alt="India Post"
         src={ProfilePicture}
        />
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <Box
          component={"form"}         
          sx={{ mt: 3,width:"1000" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>                  
              <TextField
                autoComplete="off"
                name="employeeNumber"
                id="employeeNumber"
                label="Employee Number"
                size="small"
                required
                fullWidth
                onChange={handleEmployeeNumberCheck}
                helperText={validEmployeeNumber.message}
                    error={!validEmployeeNumber.valid}
                    color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="employeeNumberConfirmation"
                id="employeeNumberConfirmation"
                label="Employee Number Confirmation"
                size="small"
                fullWidth
                
              />
            </Grid>
           
              <Grid item xs={12} sm={6}>

              <TextField
                autoComplete="off"
                name="employeeName"
                id="employeeName"
                label="Employee Name"
                size="small"
                required
                fullWidth
                
              />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
                autoComplete="off"
                name="employeeNameConfirmation"
                id="employeeNameConfirmation"
                label="Employee Name Confirmation"
                size="small"
                fullWidth
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="mobileNumber"
                id="mobileNumber"
                label="Mobile No."
                size="small"
                type='tel'
                required
                fullWidth
                
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="otpMobile"
                id="otpMobile"
                label="OTP Mobile"
                size="small"

                required
                fullWidth
                
              />
            </Grid>

              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="email"
                id="email"
                label="Email "
                size="small"
                required
                fullWidth
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="otpEmail"
                id="otpEmail"
                label="OTP Email "
                size="small"
                required
                fullWidth
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="cadre"
                id="cadre"
                label="Cadre"
                size="small"
                helperText=""
                required
                fullWidth
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="officeStatus"
                id="officeStatus"
                label="Office Status"
                size="small"
                helperText=""
                required
                fullWidth
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required > Parent Circle</InputLabel>
                  <Select
                  value={circleName}
                  onChange={handleChange}
                  label= "Parent Circle"
                  size="small"
                  >
                     
                    <MenuItem value={10}></MenuItem>
                    <MenuItem value={20}>Kerala</MenuItem>
                    <MenuItem value={30}>Karnataka</MenuItem>
                  </Select>
                  

                </FormControl>
                
              
            </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
              <InputLabel id="Parent-Region-label" required >Parent Region</InputLabel>
              <Select 
              labelId="Parent-Region-select"
              id="Parent-Region"
              value={regionName}
              label="Parent Region"
              onChange={handleChangeRegionName}
              size="small"
              >
                <MenuItem value={4}>Chennai City</MenuItem>
                <MenuItem value={5}>Southern</MenuItem>
                <MenuItem value={6}>Central</MenuItem>
              </Select>
              </FormControl>
              
            </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                  <InputLabel required size="small"> Parent Division</InputLabel>
                  <Select
                  value={divisionName}
                  onChange={handleChangeParentDivision}
                  label= "Parent Circle"
                  size="small"
                  >
                    <MenuItem value={10}>Chennai City North</MenuItem>
                    <MenuItem value={20}>Chennai City South</MenuItem>
                    <MenuItem value={30}>Tambaram</MenuItem>
                  </Select>

                </FormControl>
              
            </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="fatherName"
                id="fatherName"
                label="Father Name"
                size="small"
                helperText=""
                required
                fullWidth
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{mt:2}}>
                <FormLabel id="maritalStatus-label" >Marital Status</FormLabel>
                <RadioGroup
                  name="MaritalStatus"
                  row


                >
                  <FormControlLabel
                    sx={{ ml: 3 }} value='Yes' control={<Radio size="small" />} label="Yes" />
                  <FormControlLabel value='No' control={<Radio size="small" />} label="No" />
                  
                </RadioGroup>
              </FormControl>
            </Grid>
             
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="spouseName"
                id="spouseName"
                label="Spouse Name"
                size="small"
                helperText=""
                required
                fullWidth
                disabled
                sx={{mt:2.5}}
                
              />
            </Grid>

              <Grid item xs={12} sm={6} sx={{mt:2.5}}>
              <Date  />
            </Grid>
            

            <Grid item xs={12} sm={6}>
            <FormControl
            sx={{mt:2.5}}>
                <FormLabel id="maritalStatus-label" >Gender</FormLabel>
                <RadioGroup
                  name="MaritalStatus"
                  row
                  >
                  <FormControlLabel
                    sx={{ ml: 3 }} value='Male' control={<Radio size="small" />} label="Male" />
                  <FormControlLabel value='Female' control={<Radio size="small" />} label="Female" />
                  <FormControlLabel value='other' control={<Radio size="small" />} label="other" />
                  
                </RadioGroup>
              </FormControl>
          
            </Grid>

            
            <Grid>
              
            </Grid>



          </Grid> 
          <Grid container justifyContent="center" >
            <Grid item
            sx={{padding:2.5}}>
            <Button
            type="submit"
            variant="contained"
            id="submit"
            size="large"
            
             >
            Register
          </Button>
          </Grid>
          </Grid>            
          <Grid container justifyContent="center">
            <Grid item>
              Already have an account?{" "}
              <Link to=".." variant="body2">
                Log In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>    
    </Container>    
    </>
  )
}

 