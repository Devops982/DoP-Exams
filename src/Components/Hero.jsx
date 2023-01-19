import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/LandingPageImage.png";
import CustomButton from "./CustomButton";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Height } from "@mui/icons-material";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
      <Container maxWidth="100%">
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1.80" }}>
            <Title variant="h1"  sx={{ fontSize: "42px" }}>
             LDCE Exam Application and Approval Portal
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
             A Centralised Portal for PAN India DOP LDCE Examination Applications and Approvals.
            </Typography>
            <Grid container spacing={2}  rowSpacing={2} >
              <Grid xs={4}>
                <Link to="/signup">
                <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="DOP Employee Registration"
                heroBtn={true}
                Height="10px"
              />
                </Link>
                
              </Grid>
              <Grid xs={4}>
                <Link to="/Login">
                <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="DOP Employee Login"
                heroBtn={true}
                Height="10px"
              />
                </Link>
                
              </Grid>
              <Grid xs={4}>
             <a target="_blank" href="http://localhost:3002/">
             <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="DOP Controlling Authority Login"
                heroBtn={true}
                Height="10px"
              />
             </a>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flex: "0.8" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "70%", marginBottom: "2rem", Height:"50px",}}
            />
          </Box>
        </CustomBox>
        <Footer/>
      </Container>
    </Box>
  );
};

export default Hero;
