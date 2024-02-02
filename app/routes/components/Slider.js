// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import LAYOUT from 'constant';
import { gridSpacing } from 'store/constant';
import BasicSlider from 'components/forms/Slider/BasicSlider';
import DisableSlider from 'components/forms/Slider/DisableSlider';
import VolumeSlider from 'components/forms/Slider/VolumeSlider';
import LabelSlider from 'components/forms/Slider/LabelSlider';
import PopupSlider from 'components/forms/Slider/PopupSlider';
import StepSlider from 'components/forms/Slider/StepSlider';
import VerticalSlider from 'components/forms/Slider/VerticalSlider';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// ==============================|| SLIDER PAGE ||============================== //

const Slider = () => (
    <Layout variant={LAYOUT.main}>
        <MainCard title="Slider" secondary={<SecondaryAction link="https://next.material-ui.com/components/slider/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={4}>
                    <SubCard title="Basic Slider">
                        <BasicSlider />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Disabled">
                        <DisableSlider />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Volume">
                        <VolumeSlider />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="With Label">
                        <LabelSlider />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="With Popup Value">
                        <PopupSlider />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Steps With Popup Value">
                        <StepSlider />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Vertical Slider">
                        <VerticalSlider />
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    </Layout>
);

export default Slider;
