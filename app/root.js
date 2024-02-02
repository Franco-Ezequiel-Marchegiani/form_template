import { useEffect, useState } from 'react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// project imports
import { dispatch, persister, store } from 'store';
import { getWidgetMenu } from 'store/slices/api/menu';
import ThemeCustomization from 'themes';
import NavigationScroll from 'layout/NavigationScroll';
import { ConfigProvider } from 'contexts/ConfigContext';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
import Locales from 'ui-component/Locales';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';
import Loader from 'ui-component/Loader';
import Error from 'routes/pages/error';

// styles imports
import globalStyles from 'assets/scss/style.css';
import favicon from 'assets/images/favicon.svg';

// third-party
import scrollBarStyle from 'react-perfect-scrollbar/dist/css/styles.css';
import carouselStyle from 'react-responsive-carousel/lib/styles/carousel.min.css';
import reactQuillStyle from 'react-quill/dist/quill.snow.css';
import reactDraftWysingStyle from 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import slickCarouselStyle from 'slick-carousel/slick/slick.css';
import slickCarouselThemeStyle from 'slick-carousel/slick/slick-theme.css';

// export links
export const links = () => [
    {
        rel: 'icon',
        href: favicon,
        type: 'image/svg'
    },
    {
        rel: 'stylesheet',
        href: globalStyles
    },
    {
        rel: 'stylesheet',
        href: scrollBarStyle
    },
    {
        rel: 'stylesheet',
        href: carouselStyle
    },
    {
        rel: 'stylesheet',
        href: slickCarouselStyle
    },
    {
        rel: 'stylesheet',
        href: slickCarouselThemeStyle
    },
    {
        rel: 'stylesheet',
        href: reactQuillStyle
    },
    {
        rel: 'stylesheet',
        href: reactDraftWysingStyle
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
    }
];

//meta export
export const meta = () => ({
    charset: 'utf-8',
    title: 'Berry - React Material Admin Dashboard Template',
    viewport: 'width=device-width,initial-scale=1'
});

// ==============================|| APP ||============================== //

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#2296f3" />
                <meta name="title" content="Berry - React Material Admin Dashboard Template by CodedThemes" />
                <meta
                    name="description"
                    content="Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development."
                />
                <meta
                    name="keywords"
                    content="react admin template, material-ui react dashboard template, reactjs admin template, reactjs dashboard, react backend template"
                />
                <meta name="author" content="CodedThemes" />
                <Links />
            </head>
            <body>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persister}>
                        <ConfigProvider>
                            <Index />
                        </ConfigProvider>
                    </PersistGate>
                </Provider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export const Index = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getWidgetMenu()).then(() => setLoading(true));
    }, []);

    if (!loading) return <Loader />;

    return (
        <ThemeCustomization>
            <RTLLayout>
                <Locales>
                    <NavigationScroll>
                        <AuthProvider>
                            <>
                                <Outlet />
                                <Snackbar />
                            </>
                        </AuthProvider>
                    </NavigationScroll>
                </Locales>
            </RTLLayout>
        </ThemeCustomization>
    );
};

export function CatchBoundary() {
    return (
        <html>
            <head>
                <title>
                    Oops!
                </title>
                <Meta />
                <Links />
            </head>
            <body>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persister}>
                        <ConfigProvider>
                            <ThemeCustomization>
                                <RTLLayout>
                                    <Locales>
                                        <NavigationScroll>
                                            <Error />
                                        </NavigationScroll>
                                    </Locales>
                                </RTLLayout>
                            </ThemeCustomization>
                        </ConfigProvider>
                    </PersistGate>
                </Provider>
                <Scripts />
            </body>
        </html>
    );
}
