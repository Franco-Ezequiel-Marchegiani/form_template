// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons-react';

// constant
const icons = {
    IconClipboardCheck,
    IconPictureInPicture,
    IconForms,
    IconBorderAll,
    IconChartDots,
    IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const forms = {
    id: 'ui-forms',
    title: <FormattedMessage id="forms" />,
    icon: icons.IconPictureInPicture,
    type: 'group',
    children: [
        {
            id: 'components',
            title: <FormattedMessage id="components" />,
            type: 'collapse',
            icon: icons.IconPictureInPicture,
            children: [
                {
                    id: 'autocomplete',
                    title: <FormattedMessage id="autocomplete" />,
                    type: 'item',
                    url: '/components/autocomplete',
                    breadcrumbs: false
                },
                {
                    id: 'button',
                    title: <FormattedMessage id="button" />,
                    type: 'item',
                    url: '/components/button',
                    breadcrumbs: false
                },
                {
                    id: 'checkbox',
                    title: <FormattedMessage id="checkbox" />,
                    type: 'item',
                    url: '/components/checkbox',
                    breadcrumbs: false
                },
                {
                    id: 'date-time',
                    title: <FormattedMessage id="date-time" />,
                    type: 'item',
                    url: '/components/date-time',
                    breadcrumbs: false
                },
                {
                    id: 'radio',
                    title: <FormattedMessage id="radio" />,
                    type: 'item',
                    url: '/components/radio',
                    breadcrumbs: false
                },
                {
                    id: 'slider',
                    title: <FormattedMessage id="slider" />,
                    type: 'item',
                    url: '/components/slider',
                    breadcrumbs: false
                },
                {
                    id: 'switch',
                    title: <FormattedMessage id="switch" />,
                    type: 'item',
                    url: '/components/switch',
                    breadcrumbs: false
                },
                {
                    id: 'text-field',
                    title: <FormattedMessage id="text-field" />,
                    type: 'item',
                    url: '/components/text-field',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'plugins',
            title: <FormattedMessage id="plugins" />,
            type: 'collapse',
            icon: icons.IconForms,
            children: [
                {
                    id: 'frm-autocomplete',
                    title: <FormattedMessage id="autocomplete" />,
                    type: 'item',
                    url: '/forms/frm-autocomplete',
                    breadcrumbs: false
                },
                {
                    id: 'frm-mask',
                    title: <FormattedMessage id="mask" />,
                    type: 'item',
                    url: '/forms/frm-mask',
                    breadcrumbs: false
                },
                {
                    id: 'frm-clipboard',
                    title: <FormattedMessage id="clipboard" />,
                    type: 'item',
                    url: '/forms/frm-clipboard',
                    breadcrumbs: false
                },
                {
                    id: 'frm-recaptcha',
                    title: <FormattedMessage id="recaptcha" />,
                    type: 'item',
                    url: '/forms/frm-recaptcha',
                    breadcrumbs: false
                },
                {
                    id: 'frm-wysiwug',
                    title: <FormattedMessage id="wysiwug-editor" />,
                    type: 'item',
                    url: '/forms/frm-wysiwug',
                    breadcrumbs: false
                },
                {
                    id: 'frm-modal',
                    title: <FormattedMessage id="modal" />,
                    type: 'item',
                    url: '/forms/frm-modal',
                    breadcrumbs: false
                },
                {
                    id: 'frm-tooltip',
                    title: <FormattedMessage id="tooltip" />,
                    type: 'item',
                    url: '/forms/frm-tooltip'
                }
            ]
        },
        {
            id: 'tables',
            title: <FormattedMessage id="table" />,
            type: 'collapse',
            icon: icons.IconBorderAll,
            children: [
                {
                    id: 'tbl-basic',
                    title: <FormattedMessage id="table-basic" />,
                    type: 'item',
                    url: '/tables/tbl-basic',
                    breadcrumbs: false
                },
                {
                    id: 'tbl-sticky-header',
                    title: <FormattedMessage id="table-sticky-header" />,
                    type: 'item',
                    url: '/tables/tbl-sticky-header',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'forms-validation',
            title: <FormattedMessage id="forms-validation" />,
            type: 'item',
            url: '/forms/forms-validation',
            icon: icons.IconClipboardCheck
        },
        {
            id: 'forms-wizard',
            title: <FormattedMessage id="forms-wizard" />,
            type: 'item',
            url: '/forms/forms-wizard',
            icon: icons.IconStairsUp
        }
    ]
};

export default forms;
