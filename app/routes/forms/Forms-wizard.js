// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import LAYOUT from 'constant';
import { gridSpacing } from 'store/constant';
import BasicWizard from 'components/forms/forms-wizard/BasicWizard';
import ValidationWizard from 'components/forms/forms-wizard/ValidationWizard';

// ==============================|| FORMS WIZARD ||============================== //

const FormsWizard = () => (
    <Layout variant={LAYOUT.main}>
        <Grid container spacing={gridSpacing} justifyContent="center">
            <Grid item xs={12} md={9} lg={7}>
                <BasicWizard />
            </Grid>
            <Grid item xs={12} md={9} lg={7}>
                <ValidationWizard />
            </Grid>
        </Grid>
    </Layout>
);

export default FormsWizard;
