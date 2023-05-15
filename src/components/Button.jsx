import styled, { css } from "styled-components"
import PropTypes from 'prop-types';
import { BUTTON } from "../theme";

const StyledButton = styled.button`
    ${({ theme, type }) => css`
        ${theme.button[type]}
        &:hover {
            opacity: 0.85;
            box-shadow: 0 3px 5px -1px rgba(0,0,0,.09), 0 2px 3px -1px rgba(0,0,0,.07);
            border-color: ${({ theme }) => theme.colors.SECONDARY};
            background-color: ${({ theme }) => theme.colors.WHITE};
            color: ${({ theme }) => theme.colors.DARK};
        }
    `}
`;

const Button = ({ type, children, ...props }) => {
    return (
        <StyledButton type={type} {...props}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(Object.keys(BUTTON)),
};

export default Button;