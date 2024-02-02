import { LAYOUT_CONST } from 'constant';

export const JWT_API = {
    secret: 'SECRET-KEY',
    timeout: '1 days'
};

export const FIREBASE_API = {
    apiKey: 'AIzaSyBernKzdSojh_vWXBHt0aRhf5SC9VLChbM',
    authDomain: 'berry-material-react.firebaseapp.com',
    projectId: 'berry-material-react',
    storageBucket: 'berry-material-react.appspot.com',
    messagingSenderId: '901111229354',
    appId: '1:901111229354:web:a5ae5aa95486297d69d9d3',
    measurementId: 'G-MGJHSL8XW3'
};

export const AUTH0_API = {
    client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
    domain: 'dev-w0-vxep3.us.auth0.com'
};

export const AWS_API = {
    poolId: 'us-east-1_AOfOTXLvD',
    appClientId: '3eau2osduslvb7vks3vsh9t7b0'
};

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/dashboard/default';

export const HORIZONTAL_MAX_ITEM = 6;

export const REMIX_APP_VERSION = "v1.1.0";
export const REMIX_APP_API_URL = 'https://mock-data-api-nextjs.vercel.app'

const config = {
    layout: LAYOUT_CONST.VERTICAL_LAYOUT, // vertical, horizontal
    drawerType: LAYOUT_CONST.DEFAULT_DRAWER, // default, mini-drawer
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 8,
    outlinedFilled: true,
    navType: 'light', // light, dark
    presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
    locale: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
    rtlLayout: false,
    container: false
};

export default config;
