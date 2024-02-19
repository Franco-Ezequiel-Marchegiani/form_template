// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import TextField_Component from './Form_TextField.js';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';


// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

export default function PaymentFormChild({ partidaItemData, setPartidaItemData, handleNext, handleBack, setErrorIndex, key, id, removeForm, canRemove, formik }) {
    const handleLocalChange = (e) => {
        const { name, value } = e.target;
        setPartidaItemData({
            ...partidaItemData,
            [name]: value,
        });
    };

    console.log("formik Componente hijo");
    console.log(formik);
    
    const listado_sku_prov = ['947-II', '9502+(2)', '9502+N95', '9542(1)', 'A2', 'A830L', 'AB003', 'AB003.REAC', 'AB004', 'AB004.REAC', 'AB005', 'AB005-ROJO',]
    return (
        <>
                    <Grid item xs={12} md={1.5}>
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
                    <Grid item xs={12} md={1.5}>
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
                    <Grid item xs={12} md={1.5}>
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
                    <Grid item xs={12} md={1.5}>
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
                    <Grid item xs={12} md={1.5}>
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
                    <Grid item xs={12} md={1.5}>
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
                    <Grid item xs={12} md={1.5}>
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
                    <Grid item xs={12} md={1}>
                        {canRemove && (
                            <Button onClick={removeForm} color="error">
                                X
                            </Button>
                        )}
                    </Grid>
        </>
    );
}
