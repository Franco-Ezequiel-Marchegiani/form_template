// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField } from '@mui/material';
import React from 'react';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import TextField_Component from './Form_TextField.js';
// third-party app/components/forms/forms-wizard/ValidationWizard/Form_TextField.js
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    empresa: yup.string().required('empresa es un campo obligatorio'),
    tipo: yup.string().required('tipo es un campo obligatorio'),
    embarque: yup.string().required('embarque es un campo obligatorio'),
    numero_despacho: yup.string().required('numero es un campo obligatorio'),
    usuario: yup.string().required('usuario es un campo obligatorio')
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const AddressForm = ({ shippingData, setShippingData, handleNext, setErrorIndex }) => {
    const formik = useFormik({
        initialValues: {
            empresa: shippingData.empresa,
            tipo: shippingData.tipo,
            embarque: shippingData.embarque,
            numero_despacho: shippingData.numero_despacho,
            usuario: shippingData.usuario
        },
        validationSchema,
        onSubmit: (values) => {
            setShippingData({
                empresa: values.empresa,
                tipo: values.tipo,
                embarque: values.embarque,
                numero: values.numero,
                usuario: values.usuario
            });
            handleNext();
        }
    });
    console.log('Muestra info comp');
    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Complete cada campo del formulario
            </Typography>
            <form onSubmit={formik.handleSubmit} id="validation-forms">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField_Component
                            param_id="empresa"
                            param_name="empresa"
                            param_label="empresa"
                            param_value={formik.values.empresa}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.empresa && Boolean(formik.errors.empresa)}
                            param_helperText={formik.touched.empresa && formik.errors.empresa}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last Name *"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="address1" name="address1" label="Address line 1" fullWidth autoComplete="shipping address-line1" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="address2" name="address2" label="Address line 2" fullWidth autoComplete="shipping address-line2" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="zip" name="zip" label="Zip / Postal code" fullWidth autoComplete="shipping postal-code" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="country" name="country" label="Country" fullWidth autoComplete="shipping country" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="flex-end">
                            <AnimateButton>
                                <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => setErrorIndex(0)}>
                                    Next
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AddressForm;
