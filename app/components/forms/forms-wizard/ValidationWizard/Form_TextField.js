import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const TextField_Component = (props) => {
    //param_onChange_Options={formik.setFieldValue}
    //param_onBlur_Options={formik.setFieldTouched}
    const { param_id, param_name, param_label, param_value, param_onChange, param_error, param_helperText, autoComplete, options, param_onChange_Options, param_onBlur_Options } = props;

    return (
        <>
            {autoComplete === true ? 
                <Autocomplete
                id={param_id}
                name={param_name}
                disablePortal
                value={param_value}
                onChange={(event, newValue) => {
                    // Aquí actualizas Formik directamente con el nuevo valor
                    param_onChange_Options(param_name, newValue);
                }}
                options={options}
                onBlur={() => param_onBlur_Options(param_name, true)}
                renderInput={(params) => 
                    <TextField 
                        {...params} 
                        id={param_id}
                        label={param_label}
                        error={param_error}
                        helperText={param_helperText}
                        />}
                />
            :
                <TextField
                    id={param_id}
                    name={param_name}
                    label={param_label}
                    value={param_value}
                    onChange={param_onChange}
                    error={param_error}
                    helperText={param_helperText}
                    fullWidth
                    autoComplete="given-name"
                />
            }
        </>
    );
};
export default TextField_Component;
