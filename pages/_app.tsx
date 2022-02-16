import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'prism-themes/themes/prism-shades-of-purple.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import { createEmotionCache } from 'lib/utils';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';

export interface WebsiteProps extends AppProps {
    emotionCache: any;
}
const clientSideEmotionCache = createEmotionCache();

export function Website(props: WebsiteProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default Website;
