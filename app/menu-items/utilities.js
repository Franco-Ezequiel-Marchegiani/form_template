// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons-react';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconBrandFramer,
    IconLayoutGridAdd
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: <FormattedMessage id="utilities" />,
    icon: icons.IconTypography,
    type: 'group',
    children: [
        {
            id: 'util-animation',
            title: <FormattedMessage id="animation" />,
            type: 'item',
            url: '/utils/util-animation',
            icon: icons.IconBrandFramer,
            breadcrumbs: false
        }
    ]
};

export default utilities;
