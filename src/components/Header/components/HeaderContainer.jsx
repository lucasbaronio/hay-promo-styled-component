import styled, { css } from "styled-components";
import PropTypes from 'prop-types';
import { COLORS } from "../../../theme";
import Search from "../../Search";
import { Typography } from '../../Typography';

const Container = styled.div`
    padding-left: ${({ theme }) => theme.spacing(6)};
    padding-right: ${({ theme }) => theme.spacing(6)};
    margin-left: auto;
    margin-right: auto;

    @media ${({ theme }) => theme.mediaQueries.maxSM} {
    max-width: 100%;
    }
    @media ${({ theme }) => theme.mediaQueries.minSM} {
    max-width: 90%;
    }
`;

const ColumnBrand = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing(3)};
  margin-right: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
`;

const ColumnSearch = styled(ColumnBrand)`
  flex: 3;

  @media ${({ theme }) => theme.mediaQueries.maxLG} {
      display: none;
  }
`;

const ColumnUser = styled(ColumnBrand)`
  flex: 2;
  display: flex;
  justify-content: end;

  @media ${({ theme }) => theme.mediaQueries.maxSM} {
      display: none;
  }
`;

const ColumnToggleButton = styled(ColumnBrand)`
  flex: 1;
  display: flex;
  justify-content: end;

  @media ${({ theme }) => theme.mediaQueries.minSM} {
      display: none;
  }
`;

const Brand = styled.a`
  color: ${({ theme }) => theme.colors.DARK};
  line-height: 1rem;
  ${({ theme }) => theme.fonts.primary.bodyBold};
`;

const Link = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(3, 3)};
  text-decoration: none;
`;

const TogglerButton = styled.button`
    width: 43px;
    height: 35px;
    position: relative;
    transition: .5s ease-in-out;
    /* background: ${({ theme }) => theme.colors.WHITE}; */
    background: transparent;
    padding: 0;
    cursor: pointer;
    
    > span:nth-child(1) {
        top: 0px;
        ${({ collapseShow }) => collapseShow ? css`
            transform: rotate(45deg);
        ` : ''};
    }
    > span:nth-child(2) {
        top: 15px;
        ${({ collapseShow }) => collapseShow ? css`
            width: 0%;
            opacity: 0;
        ` : ''};
    }
    > span:nth-child(3) {
        top: 30px;
        ${({ collapseShow }) => collapseShow ? css`
            transform: rotate(-45deg);
        ` : ''};
    }
`;

const BarButton = styled.span`
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    transform-origin: left center;
    background-color: ${({ theme }) => theme.colors.LIGHT_700};
    border-radius: 10px;
    transition: .25s ease-in-out;
`;

const HeaderContainer = ({ collapseShow, onCollapse }) => {
    return (
        <Container>
            <ColumnBrand>
                <Brand href="/">Hay Promo!</Brand>
            </ColumnBrand>
            <ColumnSearch>
                <Search />
            </ColumnSearch>
            <ColumnUser>
                <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>Crear cuenta</Link>
                <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>Iniciar sesión</Link>
            </ColumnUser>
            <ColumnToggleButton>
                <TogglerButton collapseShow={collapseShow} onClick={onCollapse}>
                    <BarButton />
                    <BarButton />
                    <BarButton />
                </TogglerButton>
            </ColumnToggleButton>
        </Container>
    );
};

HeaderContainer.propTypes = {
    collapseShow: PropTypes.bool,
    onCollapse: PropTypes.func,
};

export default HeaderContainer;