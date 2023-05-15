import styled, { css } from "styled-components"
import PropTypes from 'prop-types';
import { COLORS, FONTS } from "../../theme";

const StyledTypography = styled.span`
    ${({ theme, type, font, color }) => css`
        ${theme.fonts[type][font]}
        color: ${color}
    `}
`;

const Typography = ({ type, font, color, component, children, ...props }) => {
    return (
        <StyledTypography as={component} type={type} font={font} color={color} {...props}>
            {children}
        </StyledTypography>
    );
};

Typography.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(Object.keys(FONTS)),
    font: PropTypes.string,
    color: PropTypes.oneOf(Object.values(COLORS)),
    component: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'a',
    ])
};

Typography.defaultProps = { component: 'span' };

export default Typography;