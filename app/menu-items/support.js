// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconMenu } from '@tabler/icons-react';

// constant
const icons = {
    IconMenu
};

// ==============================|| SUPPORT MENU ITEMS ||============================== //

const support = {
    id: 'support',
    title: <FormattedMessage id="others" />,
    icon: icons.IconMenu,
    type: 'group',
    children: [
        {
            id: 'menu-level',
            title: <FormattedMessage id="menu-level" />,
            type: 'collapse',
            icon: icons.IconMenu,
            children: [
                {
                    id: 'menu-level-1.1',
                    title: (
                        <>
                            <FormattedMessage id="level" /> 1
                        </>
                    ),
                    type: 'item',
                    url: '#'
                },
                {
                    id: 'menu-level-1.2',
                    title: (
                        <>
                            <FormattedMessage id="level" /> 1
                        </>
                    ),
                    type: 'collapse',
                    children: [
                        {
                            id: 'menu-level-2.1',
                            title: (
                                <>
                                    <FormattedMessage id="level" /> 2
                                </>
                            ),
                            type: 'item',
                            url: '#'
                        },
                        {
                            id: 'menu-level-2.2',
                            title: (
                                <>
                                    <FormattedMessage id="level" /> 2
                                </>
                            ),
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-3.1',
                                    title: (
                                        <>
                                            <FormattedMessage id="level" /> 3
                                        </>
                                    ),
                                    type: 'item',
                                    url: '#'
                                },
                                {
                                    id: 'menu-level-3.2',
                                    title: (
                                        <>
                                            <FormattedMessage id="level" /> 3
                                        </>
                                    ),
                                    type: 'item',
                                    url: '#'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export default support;
