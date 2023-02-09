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
 
  const preventCopyPaste = e => {
    e.preventDefault()
   // alert("Copy & Paste is not allowed!")
  }


  const configTextfield = {
    ...field,
    ...otherProps,
    autoComplete: "off",
    fullWidth: true,
    variant: 'outlined',
  
  
 
    
    
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield}
    
      onCopy={(e) => preventCopyPaste(e)}
      onPaste={(e) => preventCopyPaste(e)}
      onCut={(e) => preventCopyPaste(e)}
      onDrag={(e) => preventCopyPaste(e)}
      onDrop={(e) => preventCopyPaste(e)}

      type= { showPassword ? 'text' : 'password'}
            InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
              
            </IconButton>
          </InputAdornment>
        ),
      }}
      
 
     />
  );
};

export default TextfieldWrapperPassword;
