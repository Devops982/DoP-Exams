import React, { useState } from 'react';
import { useField, useFormikContext } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Textfield from '../Textfield/textfield-component';

import {
    Container,
    Grid,
    Typography,
    Paper,
    Box,
    Avatar,
    createTheme,

} from '@mui/material';

const RadiotextWrapper = ({
    name,
    label,
    options,
    textfieldName,
    textfieldLabel,
    textfieldDefaultValue,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const [textfieldDisabled, setTextfieldDisabled] = useState(true);

    const handleChange = evt => {
        const { value } = evt.target;
        setFieldValue(name, value);
        // Assigning the state for enabling/ disabling the text field based on radio button
        if (value === "0") { setTextfieldDisabled(false); }

        if (value != "0") { setTextfieldDisabled(true); }

    };

    const configRadio = {
        ...field,
        ...otherProps,
        onChange: handleChange
    };

    // if (meta && meta.touched && meta.error) {
    //     configRadio.error = true;
    //     configRadio.helpertext = meta.error;
    // }

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
                            <FormControl>
                                <FormLabel >{label}</FormLabel>

                                <RadioGroup

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
                        </Grid>

                        <Grid item xs={12} md={7} >
                            <Textfield
                                name={textfieldName}
                                label={textfieldLabel}
                                disabled={textfieldDisabled}


                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>

    );
};

export default RadiotextWrapper;
