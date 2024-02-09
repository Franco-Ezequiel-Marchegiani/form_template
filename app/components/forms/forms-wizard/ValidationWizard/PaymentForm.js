// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import TextField_Component from './Form_TextField.js';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    fecha_despacho: yup
        .date()
        .nullable()
        .transform((curr, orig) => orig === '' ? null : curr)
        .required('La fecha de despacho es obligatoria')
        .typeError('Debe ser una fecha válida'), // Mensaje para un valor que no sea una fecha válida
    sku: yup
        .string()
        .required('El SKU es obligatorio'),
    denominacion: yup
        .string()
        .required('La denominación es obligatoria'),
    tipo_de_bien: yup
        .string()
        .required('El tipo de bien es obligatorio'),
    costo_usd: yup
        .number()
        .positive('El costo debe ser un número positivo')
        .required('El costo en USD es obligatorio')
        .typeError('Debe ser un valor numérico'), // Mensaje para un valor que no sea numérico
    cantidad: yup
        .number()
        .positive('La cantidad debe ser un número positivo')
        .integer('La cantidad debe ser un número entero')
        .required('La cantidad es obligatoria')
        .typeError('Debe ser un valor numérico'), // Mensaje para un valor que no sea numérico
});


// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

export default function PaymentForm({ partidaItemData, setPartidaItemData, handleNext, handleBack, setErrorIndex }) {
    const formik = useFormik({
        initialValues: {
            purchase_order: partidaItemData.purchase_order,
            fecha_despacho: partidaItemData.fecha_despacho,
            sku: partidaItemData.sku,
            denominacion: partidaItemData.denominacion,
            tipo_de_bien: partidaItemData.tipo_de_bien,
            costo_usd: partidaItemData.costo_usd,
            cantidad: partidaItemData.cantidad,
        },
        validationSchema,
        onSubmit: (values) => {
            setPartidaItemData({
                purchase_order: values.purchase_order,
                fecha_despacho: values.fecha_despacho,
                sku: values.sku,
                denominacion: values.denominacion,
                tipo_de_bien: values.tipo_de_bien,
                costo_usd: values.costo_usd,
                cantidad: values.cantidad,
            });
            handleNext();
        }
    });
    const listado_sku_prov = ['947-II', '9502+(2)', '9502+N95', '9542(1)', 'A2', 'A830L', 'AB003', 'AB003.REAC', 'AB004', 'AB004.REAC', 'AB005', 'AB005-ROJO',]
    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Detalles Costo
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}> 
                    <Grid item xs={12} md={1.7}>
                        <TextField_Component
                            param_id="purchase_order"
                            param_name="purchase_order"
                            param_label="purchase_order"
                            param_value={formik.values.purchase_order}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.purchase_order && Boolean(formik.errors.purchase_order)}
                            param_helperText={formik.touched.purchase_order && formik.errors.purchase_order}
                            autoComplete={false}
                            options={['']}
                        />
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                    <TextField_Component
                            param_id="fecha_despacho"
                            param_name="fecha_despacho"
                            param_label="fecha_despacho"
                            param_value={formik.values.fecha_despacho}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.fecha_despacho && Boolean(formik.errors.fecha_despacho)}
                            param_helperText={formik.touched.fecha_despacho && formik.errors.fecha_despacho}
                            autoComplete={false}
                            options={['']}
                        />
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                        <TextField_Component
                            param_id="sku"
                            param_name="sku"
                            param_label="sku"
                            param_value={formik.values.sku}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.sku && Boolean(formik.errors.sku)}
                            param_helperText={formik.touched.sku && formik.errors.sku}
                            autoComplete={true}
                            options={listado_sku_prov}
                            param_onChange_Options={formik.setFieldValue}
                            param_onBlur_Options={formik.setFieldTouched}
                        />
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                        <TextField_Component
                            param_id="denominacion"
                            param_name="denominacion"
                            param_label="denominacion"
                            param_value={formik.values.denominacion}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.denominacion && Boolean(formik.errors.denominacion)}
                            param_helperText={formik.touched.denominacion && formik.errors.denominacion}
                            autoComplete={false}
                            options={['']}
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                        <TextField_Component
                            param_id="tipo_de_bien"
                            param_name="tipo_de_bien"
                            param_label="tipo_de_bien"
                            param_value={formik.values.tipo_de_bien}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.tipo_de_bien && Boolean(formik.errors.tipo_de_bien)}
                            param_helperText={formik.touched.tipo_de_bien && formik.errors.tipo_de_bien}
                            autoComplete={false}
                            options={['']}
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                        <TextField_Component
                            param_id="costo_usd"
                            param_name="costo_usd"
                            param_label="costo_usd"
                            param_value={formik.values.costo_usd}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.costo_usd && Boolean(formik.errors.costo_usd)}
                            param_helperText={formik.touched.costo_usd && formik.errors.costo_usd}
                            autoComplete={false}
                            options={['']}
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                        <TextField_Component
                            param_id="cantidad"
                            param_name="cantidad"
                            param_label="cantidad"
                            param_value={formik.values.cantidad}
                            param_onChange={formik.handleChange}
                            param_error={formik.touched.cantidad && Boolean(formik.errors.cantidad)}
                            param_helperText={formik.touched.cantidad && formik.errors.cantidad}
                            autoComplete={false}
                            options={['']}
                            
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember credit card details for next time"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between">
                            <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                Back
                            </Button>
                            <AnimateButton>
                                <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
                                    Next
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
