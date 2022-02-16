import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useIsSmallScreen = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return matches;
};

export const useIsMediumScreen = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
    return matches;
};

export const useIsLargeScreen = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    return matches;
};

export const useIsExtraLargeScreen = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('xl'));
    return matches;
};

export const useScreenSize = () => {
    const isSmallScreen = useIsSmallScreen();
    const isMediumScreen = useIsMediumScreen();
    const isLargeScreen = useIsLargeScreen();
    const isExtraLargeScreen = useIsExtraLargeScreen();
    if (isSmallScreen) {
        return 'small';
    }
    if (isMediumScreen) {
        return 'medium';
    }
    if (isLargeScreen) {
        return 'large';
    }
    if (isExtraLargeScreen) {
        return 'extraLarge';
    }
    return 'unknown';
};

export const useScreenSizes = () => {
    const isSmallScreen = useIsSmallScreen();
    const isMediumScreen = useIsMediumScreen();
    const isLargeScreen = useIsLargeScreen();
    const isExtraLargeScreen = useIsExtraLargeScreen();

    return {
        isSmallScreen,
        isMediumScreen,
        isLargeScreen,
        isExtraLargeScreen,
    };
};

export const useGoSizes = () => {
    const isSmallScreen = useIsSmallScreen();
    const isMediumScreen = useIsMediumScreen();
    const isLargeScreen = useIsLargeScreen();
    const isExtraLargeScreen = useIsExtraLargeScreen();

    return {
        goVertical: isSmallScreen || isMediumScreen,
        goHorizontal: isLargeScreen || isExtraLargeScreen,
    };
};
