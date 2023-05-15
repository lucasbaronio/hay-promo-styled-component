const size = {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
}

export const device = {
    minXS: `(min-width: ${size.xs})`,
    minSM: `(min-width: ${size.sm})`,
    minMD: `(min-width: ${size.md})`,
    minLG: `(min-width: ${size.lg})`,
    minXL: `(min-width: ${size.xl})`,
    minXXL: `(min-width: ${size.xxl})`,

    maxXS: `(max-width: ${size.xs})`,
    maxSM: `(max-width: ${size.sm})`,
    maxMD: `(max-width: ${size.md})`,
    maxLG: `(max-width: ${size.lg})`,
    maxXL: `(max-width: ${size.xl})`,
    maxXXL: `(max-width: ${size.xxl})`,

    xs: `(min-width: ${size.xs}) and (max-width: ${size.sm})`,
    sm: `(min-width: ${size.sm}) and (max-width: ${size.md})`,
    md: `(min-width: ${size.md}) and (max-width: ${size.lg})`,
    lg: `(min-width: ${size.lg}) and (max-width: ${size.xl})`,
    xl: `(min-width: ${size.xl}) and (max-width: ${size.xxl})`,
    xxl: `(min-width: ${size.xxl})`,
};