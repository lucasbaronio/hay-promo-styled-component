import styled from 'styled-components';
import Typography from './Typography';

const Link = styled(Typography)`
    padding: ${({ theme }) => theme.spacing(3, 3)};
    text-decoration: none;
`;

export default Link;