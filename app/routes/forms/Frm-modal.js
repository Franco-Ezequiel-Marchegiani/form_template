// project imports
import Layout from 'layout';
import LAYOUT from 'constant';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import ServerModal from 'components/forms/plugins/Modal/ServerModal';
import SimpleModal from 'components/forms/plugins/Modal/SimpleModal';

// ==============================|| MODAL PAGE ||============================== //

const Modal = () => (
    <Layout variant={LAYOUT.main}>
        <MainCard title="Simple Modal" secondary={<SecondaryAction link="https://next.material-ui.com/components/modal/" />}>
            <ServerModal />
            <SimpleModal />
        </MainCard>
    </Layout>
);

export default Modal;
