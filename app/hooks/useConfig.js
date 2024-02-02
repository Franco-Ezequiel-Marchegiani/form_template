import { useContext } from 'react';

// project imports
import { ConfigContext } from 'contexts/ConfigContext';

// ==============================|| CONFIG - HOOKS  ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
