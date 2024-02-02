// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons-react';

// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconQuestionMark,
    IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: <FormattedMessage id="pages" />,
    caption: <FormattedMessage id="pages-caption" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: <FormattedMessage id="authentication" />,
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'authentication3',
                    title: (
                        <>
                            <FormattedMessage id="authentication" /> 3
                        </>
                    ),
                    type: 'collapse',
                    children: [
                        {
                            id: 'login3',
                            title: <FormattedMessage id="login" />,
                            type: 'item',
                            url: '/pages/login/login3',
                            target: true
                        },
                        {
                            id: 'register3',
                            title: <FormattedMessage id="register" />,
                            type: 'item',
                            url: '/pages/register/register3',
                            target: true
                        },
                        {
                            id: 'forgot-password3',
                            title: <FormattedMessage id="forgot-password" />,
                            type: 'item',
                            url: '/pages/forgot-password/forgot-password3',
                            target: true
                        },
                        {
                            id: 'check-mail3',
                            title: <FormattedMessage id="check-mail" />,
                            type: 'item',
                            url: '/pages/check-mail/check-mail3',
                            target: true
                        },
                        {
                            id: 'reset-password3',
                            title: <FormattedMessage id="reset-password" />,
                            type: 'item',
                            url: '/pages/reset-password/reset-password3',
                            target: true
                        },
                        {
                            id: 'code-verification3',
                            title: <FormattedMessage id="code-verification" />,
                            type: 'item',
                            url: '/pages/code-verification/code-verification3',
                            target: true
                        }
                    ]
                }
            ]
        },
        {
            id: 'maintenance',
            title: <FormattedMessage id="maintenance" />,
            type: 'collapse',
            icon: icons.IconBug,
            children: [
                {
                    id: 'error',
                    title: <FormattedMessage id="error-404" />,
                    type: 'item',
                    url: '/pages/error',
                    target: true
                }
            ]
        },
        {
            id: 'contact-us',
            title: <FormattedMessage id="contact-us" />,
            type: 'item',
            icon: icons.IconPhoneCall,
            url: '/pages/contact-us',
            target: true
        }
    ]
};

export default pages;
