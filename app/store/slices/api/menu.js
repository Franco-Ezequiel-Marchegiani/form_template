// project import
import { dispatch } from 'store';
import axios from 'utils/axios';
import { getMenuListSuccess, hasError } from '../menu';

// ==============================|| MENU API ||============================== //

export function getWidgetMenu() {
    return async () => {
        try {
            const response = await axios.get('/api/menu/widget');
            dispatch(getMenuListSuccess(response.data.widget));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
}
