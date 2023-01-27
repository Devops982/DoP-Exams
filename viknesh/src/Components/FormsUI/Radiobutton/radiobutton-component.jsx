import React from 'react';
import { useField, useFormikContext, ErrorMessage } from 'formik';

import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText
} from "@mui/material";

const RadioWrapper = ({
  name,
  label,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = evt => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configRadio = {
    ...field,
    ...otherProps,
    onChange: handleChange
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;

  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel >{label}</FormLabel>
      <RadioGroup  {...configRadio} >
        {Object.keys(options).map((item, pos) => {
          return (
            <FormControlLabel
              key={pos}
              value={options[item]}
              control={<Radio />}
              label={options[item]} >

            </FormControlLabel>
          )
        })}

      </RadioGroup>
      <FormHelperText>
        <ErrorMessage name={name} />
      </FormHelperText>
    </FormControl>
  );
};

export default RadioWrapper;




