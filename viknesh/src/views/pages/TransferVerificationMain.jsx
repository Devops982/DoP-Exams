import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ThemeProvider } from "@emotion/react";

import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
 
} from "@mui/material";


import TransferTab from "../../components/FormsUI/Tabs/tabpanel-transfer-verification-component";


const TransferVerificationMain = () => {
  return (
    <Container component={"main"} maxWidth="xl">
      <Paper
        elevation={5}
        sx={{
          padding: "5px",
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
              margin: "3rem",
            }}
          >
            Transfer Verification Main Page
          </Typography>

          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <div>
                 
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TransferTab />
                      </Grid>
                    </Grid>
                
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
    </Container>
  );
};

export default TransferVerificationMain;
