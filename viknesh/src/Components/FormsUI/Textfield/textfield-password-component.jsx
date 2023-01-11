import React, {useState} from 'react';
import {
  TextField,
  InputAdornment,
  IconButton } from "@mui/material";
import { useField } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const TextfieldWrapperPassword = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => setShowPassword(showPassword => !showPassword);
 



  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'filled',
 
    
    
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield}
      type= { showPassword ? 'text' : 'password'}
      endAdornment= {
        < InputAdornment position ="end">
    <IconButton
      onClick={handleTogglePassword}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
         
        </InputAdornment >
      }
      
 
     />
  );
};

export default TextfieldWrapperPassword;
