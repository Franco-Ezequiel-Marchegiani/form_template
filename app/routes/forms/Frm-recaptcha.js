// material ui
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third-party
import ReCAPTCHA from 'react-google-recaptcha';

// project imports
import Layout from 'layout';
import LAYOUT from 'constant';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';

// ==============================|| PLUGIN - GOOGLE RECAPTCHA ||============================== //

const RecaptchaPage = () => {
    const handleOnChange = () => {};
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Layout variant={LAYOUT.main}>
            <MainCard
                title="ReCaptcha"
                secondary={
                    <SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://www.npmjs.com/package/react-google-recaptcha" />
                }
            >
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12} lg={6}>
                        <SubCard title="ReCaptcha Example">
                            {matchDownSM ? (
                                <ReCAPTCHA sitekey="6LdzqbcaAAAAALrGEZWQHIHUhzJZc8O-KSTdTTh_" onChange={handleOnChange} size="compact" />
                            ) : (
                                <ReCAPTCHA sitekey="6LdzqbcaAAAAALrGEZWQHIHUhzJZc8O-KSTdTTh_" onChange={handleOnChange} size="normal" />
                            )}
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </Layout>
    );
};

export default RecaptchaPage;
