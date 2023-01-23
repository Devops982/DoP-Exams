import React from 'react';
import { useField, useFormikContext } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

  // if (meta && meta.touched && meta.error) {
  //   configRadio.error = true;
  //   configRadio.helpertext = meta.error;
  // }

  return (
      <FormControl>
      <FormLabel >{label}</FormLabel>
      <RadioGroup  {...configRadio} >
         {Object.keys(options).map((item, pos) => {
         return (
           <FormControlLabel 
           key = {pos}
           value={item} 
           control={<Radio />}
           label={options[item]} >
           
           </FormControlLabel>
        )
       })}
   
      </RadioGroup>
    </FormControl> 
  );
};

export default RadioWrapper;




