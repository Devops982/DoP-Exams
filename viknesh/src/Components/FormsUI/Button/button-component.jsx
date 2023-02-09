import React from 'react';
import { Button } from "@mui/material"; 
import { Formik, useFormikContext } from 'formik';

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    ...otherProps,
    variant: 'contained',
    fullWidth: true,
    onClick: handleSubmit,
   // disabled: !(Formik.isValid && Formik.dirty)
  }

  

  return (
    <Button
      {...configButton }
     
    >
      {children}
    
    </Button>
  );
};

export default ButtonWrapper;
