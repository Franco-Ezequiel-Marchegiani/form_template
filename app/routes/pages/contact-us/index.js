// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Layout from 'layout';
import LAYOUT from 'constant';
import AppBar from 'ui-component/extended/AppBar';
import ContactCard from 'components/contact-us/ContactCard';

// assets
import headerBackground from 'assets/images/landing/bg-header.jpg';

const HeaderWrapper = styled('div')(({ theme }) => ({
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: '100% 600px',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    paddingTop: 30,
    [theme.breakpoints.down('md')]: {
        paddingTop: 0
    }
}));

// ============================|| CONTACT US MAIN ||============================ //

const ContactUsPage = () => (
    <Layout variant={LAYOUT.minimal}>
        <HeaderWrapper>
            <AppBar />
            <ContactCard />
        </HeaderWrapper>
    </Layout>
);

export default ContactUsPage;
