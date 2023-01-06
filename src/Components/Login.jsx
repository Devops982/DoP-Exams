import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Container,
    
    Grid,
    TextField,
    Typography,
    Paper,
    InputAdornment,
    IconButton,
  } from "@mui/material";
import { Link} from "react-router-dom";
import Logo from '../Images/IPlogo.png';
import SendIcon from '@mui/icons-material/Send';



const Login = () => {
  return (
    <Container component={"main"} maxWidth="xs">
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
                <Avatar
                 variant="square"
                 sx={{ width: 120, height: 72 }}
                 alt="India Post"
                 src={Logo}
                >
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <Box component={"form"}  sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            autoComplete="off"
                            name="username"
                            id="username"
                            label="Username"                            
                            size="small"
                            required
                            fullWidth
                            autoFocus                           
                             
                            >

                            </TextField>

                        </Grid>
                        <Button
                        type="button"
                        variant="contained"
                        id="sendOtp"
                        size="large"
                         sx={{ width:1/2,ml: 12, mt: 1, mb: 0 }}
      
                        endIcon={<SendIcon />}
                        
                        >
                            Send OTP
                        </Button>
                        <Grid item xs={12}>
                            <TextField
                             required
                             fullWidth
                             name="loginOtp"
                             label="OTP"
                             type= "otp"
                             id="loginOtp"
                             size="small"
                             autoComplete="off"                           
                              
                             InputProps={{
                               endAdornment: (
                                 <InputAdornment position="end">
                                   <IconButton
                                                              >
                                    
                                   </IconButton>
                                 </InputAdornment>
                               ),
                             }}
                            >
                            </TextField>
                            <Button
                            type="submit"
                            variant="contained"
                            id="submit"
                            size="large"
                            fullwidth
                            required
                            sx={{width:1/2,
                              pr: 5, pl: 5,
                              ml:10, mt: 1, mb: 1
                               }}                            
                            >
                                Log In
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    Don't have an account?{" "} 
                                    
                                    <Link to="signup" variant="body2">
                                     Register Now!
                                    </Link>
                                                                                                
                                </Grid>

                            </Grid>                         

                        </Grid>

                    </Grid>
                </Box>

            </Box>

        </Paper>        
    </Container>
   )
}

export default Login