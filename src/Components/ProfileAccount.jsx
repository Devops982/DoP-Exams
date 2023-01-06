import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import ProfilePicture from '../Images/ProfilePicture.png';
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
    ClearRounded,
    DoneRounded,
    VisibilityOffRounded,
    VisibilityRounded,
  } from "@mui/icons-material";
  import { Link } from "react-router-dom";
import Date from './Signup/Date';

const ProfileAccount = () => {
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
              <TextField
                autoComplete="off"
                name="parentCircle"
                id="parentCircle"
                label="Parent Circle"
                size="small"
                helperText=""
                required
                fullWidth
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="parentRegion"
                id="parentRegion"
                label="Parent Region"
                size="small"
                helperText=""
                required
                fullWidth
                
              />
            </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="parentDivision"
                id="parentDivision"
                label="Parent Division"
                size="small"
                helperText=""
                required
                fullWidth
               
              />
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
              <TextField
                autoComplete="off"
                name="maritalStatus"
                id="maritalStatus"
                label="Marital Status (If Yes – Spouse Name)"
                size="small"
                helperText=""
                required
                fullWidth
                
              />
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
                
              />
            </Grid>

              <Grid item xs={12} sm={6}>
              <Date/>
            </Grid>

            <Grid item xs={12} sm={6}>
            <FormControl>
                <FormLabel id="maritalStatus-label" >Marital Status</FormLabel>
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

            <Grid item xs={12} sm={6}>
              <FormControl>
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
            <Grid>
              
            </Grid>



          </Grid> 
          <Grid container justifyContent="center" >
            <Grid item>
            <Button
            type="submit"
            variant="contained"
            id="submit"
            size="large"
            
                            >
            Update
          </Button>
          </Grid>
          </Grid>            
          
        </Box>
      </Box>
    </Paper>    
    </Container>    
    </>
  )
}

export default ProfileAccount