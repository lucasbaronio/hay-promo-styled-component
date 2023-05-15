import styled from "styled-components";
import PropTypes from 'prop-types';
import Search from "../../Search";
import { Link } from "../../Typography";
import { COLORS } from "../../../theme";

const Container = styled.nav`
    padding-left: ${({ theme }) => theme.spacing(6)};
    padding-right: ${({ theme }) => theme.spacing(6)};
    display: flex;
    flex-direction: column;
    align-items: center;

    > input:first-of-type {
    display: flex;
    }
`;

const NavBarSearch = styled.div`
    width: 100%;
    display: flex;
    margin-top: ${({ theme }) => theme.spacing(6)};
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    
    > div {
        margin-left: ${({ theme }) => theme.spacing(24)};
        margin-right: ${({ theme }) => theme.spacing(24)};
        @media ${({ theme }) => theme.mediaQueries.maxSM} {
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media ${({ theme }) => theme.mediaQueries.minLG} {
        display: none;
    }
`;

const NavBarTitles = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries.maxSM} {
        display: ${({ collapseShow }) => collapseShow ? 'flex' : 'none'};
        flex-direction: column;
    }
    @media ${({ theme }) => theme.mediaQueries.minSM} {
        flex-direction: row;
        > .user-links {
            display: none;
        }
    }

    > a {
        margin: ${({ theme }) => theme.spacing(4)};
    }
`;

const UserLinks = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;

    > a {
        width: 100%;
        margin: ${({ theme }) => theme.spacing(4)};
    }
`;

const NavBar = ({ collapseShow }) => {
    return (
        <Container>
            <NavBarSearch>
                <Search />
            </NavBarSearch>
            <NavBarTitles collapseShow={collapseShow}>
                <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>Titulo 1</Link>
                <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>Titulo 2</Link>
                <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>Titulo 3</Link>
                <UserLinks className="user-links">
                    <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>Crear cuenta</Link>
                    <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>Iniciar sesión</Link>
                </UserLinks>
            </NavBarTitles>
        </Container>
    );
};

NavBar.propTypes = {
    collapseShow: PropTypes.bool,
};

export default NavBar;
