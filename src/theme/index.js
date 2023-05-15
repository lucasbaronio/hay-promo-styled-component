import { css } from 'styled-components';
import { device } from './breakpoint';
import spacing from './spacing';

const FONT_FAMILY = {
    MAIN: 'Noto Sans',
    SECONDARY: 'Open Sans',
};

const FONT_SIZE = {
    H1_LARGE: '40px',
    H2_LARGE: '36px',
    H3_LARGE: '30px',
    H4_LARGE: '24px',
    H5_LARGE: '20px',
    H6_LARGE: '16px',
    MEDIUM: '18px',
    BODY: '16px',
    SMALL: '14px',
    X_SMALL: '12px',
    XX_SMALL: '10px',
};

const FONT_WEIGHT = {
    EXTRA_BOLD: 800,
    BOLD: 700,
    SEMI_BOLD: 600,
    EXTRA_REGULAR: 500,
    REGULAR: 400,
};

const buildFont = (family, size, weight) => css`
    font-family: ${family};
    font-size: ${size};
    font-weight: ${weight};
`;

const buildPrimaryFont = (size, weight) => buildFont(FONT_FAMILY.MAIN, size, weight);
const buildSecondaryFont = (size, weight) => buildFont(FONT_FAMILY.SECONDARY, size, weight);

export const FONTS = {
    primary: {
        xxSmallBold: buildPrimaryFont(FONT_SIZE.XX_SMALL, FONT_WEIGHT.BOLD),
        xSmallRegular: buildPrimaryFont(FONT_SIZE.X_SMALL, FONT_WEIGHT.REGULAR),
        xSmallBold: buildPrimaryFont(FONT_SIZE.X_SMALL, FONT_WEIGHT.BOLD),
        smallRegular: buildPrimaryFont(FONT_SIZE.SMALL, FONT_WEIGHT.REGULAR),
        smallExtraRegular: buildPrimaryFont(FONT_SIZE.SMALL, FONT_WEIGHT.EXTRA_BOLD),
        bodyRegular: buildPrimaryFont(FONT_SIZE.BODY, FONT_WEIGHT.REGULAR),
        bodyExtraRegular: buildPrimaryFont(FONT_SIZE.BODY, FONT_WEIGHT.EXTRA_BOLD),
        bodyBold: buildPrimaryFont(FONT_SIZE.BODY, FONT_WEIGHT.BOLD),
        mediumRegular: buildPrimaryFont(FONT_SIZE.MEDIUM, FONT_WEIGHT.REGULAR),
        mediumExtraRegular: buildPrimaryFont(FONT_SIZE.MEDIUM, FONT_WEIGHT.EXTRA_BOLD),
        h6SemiBold: buildPrimaryFont(FONT_SIZE.H6_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h6ExtraBold: buildPrimaryFont(FONT_SIZE.H6_LARGE, FONT_WEIGHT.EXTRA_BOLD),
        h5SemiBold: buildPrimaryFont(FONT_SIZE.H5_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h5ExtraBold: buildPrimaryFont(FONT_SIZE.H5_LARGE, FONT_WEIGHT.BOLD),
        h4SemiBold: buildPrimaryFont(FONT_SIZE.H4_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h4ExtraBold: buildPrimaryFont(FONT_SIZE.H4_LARGE, FONT_WEIGHT.EXTRA_BOLD),
        h3: buildPrimaryFont(FONT_SIZE.H3_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h2: buildPrimaryFont(FONT_SIZE.H2_LARGE, FONT_WEIGHT.BOLD),
        h1: buildPrimaryFont(FONT_SIZE.H1_LARGE, FONT_WEIGHT.BOLD),
    },
    secondary: {
        xxSmallBold: buildSecondaryFont(FONT_SIZE.XX_SMALL, FONT_WEIGHT.BOLD),
        xSmallRegular: buildSecondaryFont(FONT_SIZE.X_SMALL, FONT_WEIGHT.REGULAR),
        xSmallBold: buildSecondaryFont(FONT_SIZE.X_SMALL, FONT_WEIGHT.BOLD),
        smallRegular: buildSecondaryFont(FONT_SIZE.SMALL, FONT_WEIGHT.REGULAR),
        smallExtraRegular: buildSecondaryFont(FONT_SIZE.SMALL, FONT_WEIGHT.EXTRA_BOLD),
        bodyRegular: buildSecondaryFont(FONT_SIZE.BODY, FONT_WEIGHT.REGULAR),
        bodyExtraRegular: buildSecondaryFont(FONT_SIZE.BODY, FONT_WEIGHT.EXTRA_BOLD),
        bodyBold: buildSecondaryFont(FONT_SIZE.BODY, FONT_WEIGHT.BOLD),
        mediumRegular: buildSecondaryFont(FONT_SIZE.MEDIUM, FONT_WEIGHT.REGULAR),
        mediumExtraRegular: buildSecondaryFont(FONT_SIZE.MEDIUM, FONT_WEIGHT.EXTRA_BOLD),
        h6SemiBold: buildSecondaryFont(FONT_SIZE.H6_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h6ExtraBold: buildSecondaryFont(FONT_SIZE.H6_LARGE, FONT_WEIGHT.EXTRA_BOLD),
        h5SemiBold: buildSecondaryFont(FONT_SIZE.H5_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h5ExtraBold: buildSecondaryFont(FONT_SIZE.H5_LARGE, FONT_WEIGHT.BOLD),
        h4SemiBold: buildSecondaryFont(FONT_SIZE.H4_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h4ExtraBold: buildSecondaryFont(FONT_SIZE.H4_LARGE, FONT_WEIGHT.EXTRA_BOLD),
        h3: buildSecondaryFont(FONT_SIZE.H3_LARGE, FONT_WEIGHT.SEMI_BOLD),
        h2: buildSecondaryFont(FONT_SIZE.H2_LARGE, FONT_WEIGHT.BOLD),
        h1: buildSecondaryFont(FONT_SIZE.H1_LARGE, FONT_WEIGHT.BOLD),
    }
};

export const COLORS = {
    DARK: '#1E293B',
    WHITE: '#FFFFFF',
    PRIMARY: '#1B46C2',
    SECONDARY: '#64748B',
    INFO: '#55A6F8',
    SUCCESS: '#67C23A',
    DANGER: '#EA4E3D',
    WARNING: '#1E293B',
    LIGHT_100: '#F9FAFB',
    LIGHT_200: '#E9ECEF',
    LIGHT_300: '#DDE0E5',
    LIGHT_400: '#CED4DA',
    LIGHT_500: '#ADB5BD',
    LIGHT_600: '#6C757D',
    LIGHT_700: '#495057',
    LIGHT_800: '#343A40',
    LIGHT_900: '#212529',
};

export const BUTTON = {
    primaryLarge: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '0px 4rem',
        // gap: '7px',
        background: COLORS.DARK,
        opacity: 0.9,
        borderRadius: '6px',
    },
    primarySmall: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '0px 16px',
        // gap: '7px',
        background: COLORS.DARK,
        borderRadius: '6px',
    },
    primarySmallTransparent: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '0px 4rem',
        // gap: '7px',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(1.36px)',
        /* Note: backdrop-filter has minimal browser support */
        borderRadius: '6px',
    },
    secondaryLarge: {
        boxSizing: 'border-box',
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '0px 4rem',
        // gap: '4px',
        background: COLORS.WHITE,
        // border: `1px solid ${COLORS.LIGHT_500}`,
        borderRadius: '6px',
        color: COLORS.SECONDARY,
    },
    secondaryLargeWithBorder: {
        boxSizing: 'border-box',
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '0px 4rem',
        // gap: '4px',
        background: COLORS.WHITE,
        border: `1px solid ${COLORS.LIGHT_600}`,
        borderRadius: '6px',
        color: COLORS.SECONDARY,
    },
    secondarySmall: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '0px 16px',
        // gap: '4px',
        background: COLORS.DARK,
        // border: `1px solid ${COLORS.LIGHT_500}`,
        borderRadius: '6px',
        color: COLORS.SECONDARY,
    },
    secondarySmallWithBorder: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '0px 16px',
        // gap: '4px',
        background: COLORS.DARK,
        border: `1px solid ${COLORS.LIGHT_600}`,
        borderRadius: '6px',
        color: COLORS.SECONDARY,
    },
}

const IMAGES = {
    blur: {
        background: `rgba(255, 255, 255, 0.65)`,
        border: `1px solid ${COLORS.WHITE}`,
        /* With Blur */
        boxShadow: `0px 12px 16px -4px rgba(12, 26, 36, 0.04)`,
        backdropFilter: 'blur(13.6px)',
        /* Note: backdrop-filter has minimal browser support */
        borderRadius: '6px',
    }
};

const theme = {
    colors: COLORS,
    fonts: FONTS,
    fontFamily: {
        primary: FONT_FAMILY.MAIN,
        secondary: FONT_FAMILY.SECONDARY,
    },
    button: BUTTON,
    images: IMAGES,
    mediaQueries: device,
    spacing,
}

export default theme;