import React from 'react';
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField } from '@mui/material';

const TextField_Component = (props) => {
    const { param_id, param_name, param_label, param_value, param_onChange, param_error, param_helperText } = props;
    console.log('Hola?');
    return (
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
    );
};
export default TextField_Component;
