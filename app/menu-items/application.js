// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconApps, IconLayoutKanban } from '@tabler/icons-react';

// constant
const icons = {
    IconApps,
    IconLayoutKanban
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'kanban',
            title: 'Kanban',
            type: 'item',
            icon: icons.IconLayoutKanban,
            url: '/app/kanban/board'
        }
    ]
};

export default application;
