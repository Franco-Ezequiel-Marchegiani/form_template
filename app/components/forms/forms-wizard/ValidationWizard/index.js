import React from 'react';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';

// project imports
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';

// step options
const steps = ['Carga Encabezados', 'Carga Detalle', 'Revisión'];

const getStepContent = (step, handleNext, handleBack, setErrorIndex, encabezadosData, setEncabezadosData, partidaItemData, setPartidaItemData) => {
    //ACÁ SE CARGA LOS COMPONENTES SEGÚN EL PASO A PASO
    switch (step) {
        case 0:
            return (
                <AddressForm
                    handleNext={handleNext}
                    setErrorIndex={setErrorIndex}
                    encabezadosData={encabezadosData}
                    setEncabezadosData={setEncabezadosData}
                />
            );
        case 1:
            return (
                <PaymentForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    partidaItemData={partidaItemData}
                    setPartidaItemData={setPartidaItemData}
                />
            );
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
};

// ==============================|| FORMS WIZARD - VALIDATION ||============================== //

const ValidationWizard = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [encabezadosData, setEncabezadosData] = React.useState({});
    const [partidaItemData, setPartidaItemData] = React.useState({});
    const [errorIndex, setErrorIndex] = React.useState(0);


    console.log(encabezadosData);
    console.log(partidaItemData);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setErrorIndex(null);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <MainCard title="Validation">
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label, index) => {
                    const labelProps = {};

                    if (index === errorIndex) {
                        labelProps.optional = (
                            <Typography variant="caption" color="error">
                                Error
                            </Typography>
                        );

                        labelProps.error = true;
                    }

                    return (
                        <Step key={label}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                {activeStep === steps.length ? (
                    <>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your
                            order has shipped.
                        </Typography>
                        <Stack direction="row" justifyContent="flex-end">
                            <AnimateButton>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => {
                                        setEncabezadosData({});
                                        setPartidaItemData({});
                                        setActiveStep(0);
                                    }}
                                    sx={{ my: 3, ml: 1 }}
                                >
                                    Reset
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </>
                ) : (
                    <>
                        {getStepContent(
                            activeStep,
                            handleNext,
                            handleBack,
                            setErrorIndex,
                            encabezadosData,
                            setEncabezadosData,
                            partidaItemData,
                            setPartidaItemData
                        )}
                        {activeStep === steps.length - 1 && (
                            <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                <AnimateButton>
                                    <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </AnimateButton>
                            </Stack>
                        )}
                    </>
                )}
            </>
        </MainCard>
    );
};

export default ValidationWizard;
