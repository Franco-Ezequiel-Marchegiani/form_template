// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField, Autocomplete } from '@mui/material';
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
    numero_despacho: yup.string().required('numero_despacho es un campo obligatorio'),
    usuario: yup.string().required('usuario es un campo obligatorio')
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const AddressForm = ({ encabezadosData, setEncabezadosData, handleNext, setErrorIndex }) => {
    const formik = useFormik({
        initialValues: {
            empresa: encabezadosData.empresa,
            tipo: encabezadosData.tipo,
            embarque: encabezadosData.embarque,
            numero_despacho: encabezadosData.numero_despacho,
            usuario: encabezadosData.usuario
        },
        validationSchema,
        onSubmit: (values) => {
            setEncabezadosData({
                empresa: values.empresa,
                tipo: values.tipo,
                embarque: values.embarque,
                numero_despacho: values.numero_despacho,
                usuario: values.usuario
            });
            handleNext();
        }
    });

    return (
        <Grid justifyContent="center" xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Complete cada campo del formulario
            </Typography>
            <form onSubmit={formik.handleSubmit} id="validation-forms">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField_Component
                            param_id="empresa"
                            param_name="empresa"
                            param_label="empresa"
                            param_value={formik.values.empresa}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.empresa && Boolean(formik.errors.empresa)}
                            param_helperText={formik.touched.empresa && formik.errors.empresa}
                            autoComplete={true}
                            options={['Disbyte_Arg','Matmax_Arg','Splinter_Arg', 'Disbyte_Bra', 'Disbyte_Col', 'Disbyte_Mex']}
                            param_onChange_Options={formik.setFieldValue}
                            param_onBlur_Options={formik.setFieldTouched}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField_Component
                            param_id="tipo"
                            param_name="tipo"
                            param_label="tipo"
                            param_value={formik.values.tipo}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.tipo && Boolean(formik.errors.tipo)}
                            param_helperText={formik.touched.tipo && formik.errors.tipo}
                            autoComplete={true}
                            options={['Presupuesto','Provisorio', 'Final']}
                            param_onChange_Options={formik.setFieldValue}
                            param_onBlur_Options={formik.setFieldTouched}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField_Component
                            param_id="embarque"
                            param_name="embarque"
                            param_label="embarque"
                            param_value={formik.values.embarque}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.embarque && Boolean(formik.errors.embarque)}
                            param_helperText={formik.touched.embarque && formik.errors.embarque}
                            autoComplete={false}
                            options={''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField_Component
                            param_id="numero_despacho"
                            param_name="numero_despacho"
                            param_label="numero_despacho"
                            param_value={formik.values.numero_despacho}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.numero_despacho && Boolean(formik.errors.numero_despacho)}
                            param_helperText={formik.touched.numero_despacho && formik.errors.numero_despacho}
                            autoComplete={false}
                            options={''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField_Component
                            param_id="usuario"
                            param_name="usuario"
                            param_label="usuario"
                            param_value={formik.values.usuario}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.usuario && Boolean(formik.errors.usuario)}
                            param_helperText={formik.touched.usuario && formik.errors.usuario}
                            autoComplete={true}
                            options={[ 'Dario S.', 'Matias V.', 'Nicolas G.', 'Florencia C.', 'Cristian P.', 'Diego C.', 'Sebastian V.', 'German G.', 'Pablo D.', 'Damian C.', 'Juani M.', 'Ignacio D.', 'Pablo B.', 'Agustin F.', 'Pablo E.', 'Andres D.', 'Agustin M.', 'Franco M.']}
                            param_onChange_Options={formik.setFieldValue}
                            param_onBlur_Options={formik.setFieldTouched}
                        />
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
        </Grid>
    );
};

export default AddressForm;
