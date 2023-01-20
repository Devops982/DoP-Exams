import React from 'react';
import { TextField, MenuItem } from "@mui/material";
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

  const configSelect = {
    ...field,
   
    ...otherProps,
     
    onChange: handleChange
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    // <TextField {...configSelect}>
    //   {Object.keys(options).map((item, pos) => {
    //     return (
    //       <MenuItem key={pos} value={item}>
    //         {options[item]}
    //       </MenuItem>
    //     )
    //   })}
    // </TextField>

    <FormControl>
      <FormLabel >{label}</FormLabel>
      <RadioGroup 
       row
       name="radio-buttons-group" >
         {/* <FormControlLabel value="female" control={<Radio />} label="Female" /> */}
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
       
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl> 
  );
};

export default RadioWrapper;




