import { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../theme';
import Typography from './Typography/Typography';

const blur = css`
    box-shadow: inset 0px 0px 2px #fefefed1;
    -webkit-backdrop-filter: blur(27.2px);
    backdrop-filter: blur(27.2px);
    background-color: rgba(255, 255, 255, 0.70) !important;
`;

const HeaderContainer = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    padding: ${({ theme }) => theme.spacing(6, 2, 6, 2)};
    ${blur}
    box-shadow: ${({ theme }) => `0 ${theme.spacing(1)} ${theme.spacing(6)} 0 rgba(0, 0, 0, .16)`};
    z-index: 3;
    border-radius: ${({ theme }) => theme.spacing(2)};

    > div:first-of-type {
      display: flex;
      flex-wrap: inherit;
      align-items: center;
      justify-content: space-between;
    }
`;

const Container = styled.div`
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;

  @media ${({ theme }) => theme.mediaQueries.maxSM} {
    max-width: 100%;
  }
  @media ${({ theme }) => theme.mediaQueries.minSM} {
    max-width: 80%;
  }
`

const Brand = styled.a`
    color: ${({ theme }) => theme.colors.DARK};
    line-height: 1rem;
    ${({ theme }) => theme.fonts.primary.bodyBold};
`;

const TogglerButton = styled.button`
    background: #fff;
    margin-left: ${({ theme }) => theme.spacing(3)};
    box-shadow: none !important;
`;

const Collapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
`;

const NavBarList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

const Link = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(3, 3)};
  text-decoration: none;
`;

// const TogglerIcon = styled.span`
//     display: inline-block;
//     width: 1.5em;
//     height: 1.5em;
//     vertical-align: middle;
//     background-image: none;
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: 100%;
// `;

// const TogglerBar = styled.span`
//     display: block;
//     position: relative;
//     width: 22px;
//     height: 1px;
//     border-radius: 1px;
//     background: ${props => props.theme.colors.LIGHT_600};
//     transition: all 0.2s;
//     margin: 0 auto;

//     &.bar2,
//     &.bar3 {
//         margin-top: 7px;
//     }
// `;

const NavbarBoostrap = () => {
    const [collapseShow, setCollapseShow] = useState(false);

    return (
      <HeaderContainer className="navbar navbar-expand-lg">
        <Container>
          <Brand className="navbar-brand" href="https://www.creative-tim.com/astro">Hay Promo!</Brand>
          <TogglerButton className="navbar-toggler" onClick={() => setCollapseShow(prev => !prev)} type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="true" aria-label="Toggle navigation">
            {/* <TogglerIcon className="navbar-toggler-icon mt-2">
              <TogglerBar className="bar1"></TogglerBar>
              <TogglerBar className="bar2"></TogglerBar>
              <TogglerBar className="bar3"></TogglerBar>
            </TogglerIcon> */}
            <span className="navbar-toggler-icon"></span>
          </TogglerButton>
          <Collapse className={collapseShow ? 'collapse show' : 'collapse'} id="navigation">
            <NavBarList className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="/astro-ecommerce/">
                  All Components
                </a>
                <Link type="primary" font="smallRegular" component="a" color={COLORS.DARK}>All Components</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 " aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesExample">
                  <li><a className="dropdown-item" href="/astro-ecommerce/landing/">Landing Page</a></li>
                  <li><a className="dropdown-item" href="/astro-ecommerce/product/">Product Page</a></li>
                  <li><a className="dropdown-item" href="/astro-ecommerce/shopping-cart/">Shopping Cart</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce">
                  Documentation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://github.com/creativetimofficial/astro-ecommerce">
                  <i className="fab text-lg fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://discord.com/invite/TGZqBvZB" rel="nofollow noreferrer" target="_blank">
                  <i className="fab text-lg fa-discord"></i>
                </a>
              </li>
            </NavBarList>
          </Collapse>
        </Container>
      </HeaderContainer>
    );
  };
  
  export default NavbarBoostrap;
  