import React, { useState } from 'react';

// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import TextField_Component from './Form_TextField.js';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import PaymentFormChild from './PaymentForm_Child.js';
import { v4 as uuidv4 } from 'uuid'; // uuid para generar identificadores únicos

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

    // Estado inicial con un formulario único
    const [formIds, setFormIds] = useState([uuidv4()]);

    //Función para añadir diversos formularios
    const addFormChild = () => {
        setFormIds(currentIds => [...currentIds, uuidv4()]);
    };
    //Función para eliminar campos por ID
    const removeFormChild = (idToRemove) => {
        //Una vez que se ejecuta
        setFormIds(currentIds => currentIds.filter(id => id !== idToRemove));
    };
    

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
                    {formIds.map((id)  => (
                        <PaymentFormChild
                            key={id}
                            id={id} //Iteramos el id del array de formIds para que c/u sea único
                            formik={formik}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            setErrorIndex={setErrorIndex}
                            partidaItemData={partidaItemData}
                            setPartidaItemData={setPartidaItemData}
                            removeForm={() => removeFormChild(id)} //Pasamos por parámetro la función.
                            canRemove={formIds.length > 1} //Añadimos para que NO pueda remover si es menor a 1

                        />
                    ))}
                    <Grid item xs={12}>
                        <Button onClick={addFormChild}>Añadir otro formulario</Button>

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
