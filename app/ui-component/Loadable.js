import { Suspense } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;
