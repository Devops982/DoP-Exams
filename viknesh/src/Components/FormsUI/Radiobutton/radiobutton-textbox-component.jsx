import React, { useState } from 'react';
import { useField, useFormikContext } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Textfield from '../Textfield/textfield-component';



const RadiotextWrapper = ({
    name,
    label,
    options,
    textfieldName,
    textfieldLabel,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const [textfieldDisabled, setTextfieldDisabled] = useState(true);

    const handleChange = evt => {
        const { value } = evt.target;
        setFieldValue(name, value);
        // Assigning the state for enabling/ disabling the text field based on radio button
        if (value === "0") 
            { setTextfieldDisabled(false);}

        if (value != "0") 
            { setTextfieldDisabled(true);}

    };

    const configRadio = {
        ...field,
        ...otherProps,
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configRadio.error = true;
        configRadio.helperText = meta.error;
    }

    return (

        <div>
            <FormControl>
                <FormLabel >{label}</FormLabel>
                <RadioGroup
                    row
                    {...configRadio}
                >

                    {Object.keys(options).map((item, pos) => {
                        return (
                            <FormControlLabel
                                key={pos}
                                value={item}
                                control={<Radio />}
                                label={options[item]} >
                            </FormControlLabel>

                        )
                    })
                    }


                </RadioGroup>

            </FormControl>

            <Textfield
                name={textfieldName}
                label={textfieldLabel}
                disabled={textfieldDisabled}

            />
        </div>

    );
};

export default RadiotextWrapper;
