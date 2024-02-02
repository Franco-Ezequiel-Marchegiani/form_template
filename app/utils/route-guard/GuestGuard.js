import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

// project imports
import { DASHBOARD_PATH } from 'config';
import useAuth from 'hooks/useAuth';
import Loader from 'ui-component/Loader';

// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate(DASHBOARD_PATH);
        }
    }, [isLoggedIn, navigate]);

    if (isLoggedIn) return <Loader />;

    return children;
};

export default GuestGuard;
