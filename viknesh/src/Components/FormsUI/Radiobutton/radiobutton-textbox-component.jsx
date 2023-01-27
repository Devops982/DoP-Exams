import React, { useState } from 'react';
import { useField, useFormikContext, ErrorMessage } from 'formik';
import Textfield from '../Textfield/textfield-component';

import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormHelperText
} from "@mui/material";

import {
    Container,
    Grid,
    Typography,
    Paper,
    Box,
    Avatar,
    createTheme,
    TextareaAutosize,

} from '@mui/material';

const RadiotextWrapper = ({
    name,
    label,
    options,
    textfieldName,
    textfieldLabel,
    textfieldCondition,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const [textfieldDisabled, setTextfieldDisabled] = useState(true);

    const handleChange = evt => {
        const { value } = evt.target;
        setFieldValue(name, value);

        // Assigning the state for enabling/ disabling the text field based on radio button
        { (textfieldCondition == value) ? setTextfieldDisabled(false) : setTextfieldDisabled(true) }
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

        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                }}
            >

                <Container maxWidth="xl">
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={5} >
                            <FormControl {...configFormControl}>
                                <FormLabel >{label}</FormLabel>

                                <RadioGroup

                                    {...configRadio}
                                >

                                    {Object.keys(options).map((item, pos) => {
                                        return (
                                            <FormControlLabel
                                                key={pos}
                                                value={options[item]}
                                                control={<Radio />}
                                                label={options[item]} >
                                            </FormControlLabel>

                                        )
                                    })
                                    }


                                </RadioGroup>
                                <FormHelperText>
                                    <ErrorMessage name={name} />
                                </FormHelperText>

                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={7} >
                            <Textfield
                                name={textfieldName}
                                label={textfieldLabel}
                                disabled={textfieldDisabled}
                                multiline
                                maxRows={10}


                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>

    );
};

export default RadiotextWrapper;
