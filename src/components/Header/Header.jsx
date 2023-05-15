import { useState } from "react";
import styled, { css } from "styled-components";
import HeaderContainer from "./components/HeaderContainer";
import NavBar from "./components/NavBar";

const blur = css`
    box-shadow: inset 0px 0px 2px #fefefed1;
    -webkit-backdrop-filter: blur(27.2px);
    backdrop-filter: blur(27.2px);
    background-color: rgba(255, 255, 255, 0.70) !important;
`;

const Container = styled.header`
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

const Header = () => {
    const [collapseShow, setCollapseShow] = useState(false);

    return (
        <Container>
            <HeaderContainer collapseShow={collapseShow} onCollapse={() => setCollapseShow(prev => !prev)} />
            <NavBar collapseShow={collapseShow} />
        </Container>
    );
};

export default Header;