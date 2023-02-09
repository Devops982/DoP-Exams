import React from 'react';
import { TextField } from "@mui/material";
import { useField } from 'formik';


const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

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





  }

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField {...configTextfield}
    
      onCopy={(e) => preventCopyPaste(e)}
      onPaste={(e) => preventCopyPaste(e)}
      onCut={(e) => preventCopyPaste(e)}
      onDrag={(e) => preventCopyPaste(e)}
      onDrop={(e) => preventCopyPaste(e)}

    />
  );
};
export default TextfieldWrapper;


