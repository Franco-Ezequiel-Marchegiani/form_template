// material-ui
import { Grid } from '@mui/material';

// project imports
import ValidationWizard from './ValidationWizard';
import { gridSpacing } from 'store/constant';

// ==============================|| FORMS WIZARD ||============================== //

const FormsWizard = () => (
        <Grid item xs={12} md={9} lg={12} xl={12}>
            <ValidationWizard />
        </Grid>
);

export default FormsWizard