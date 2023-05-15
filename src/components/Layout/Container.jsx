import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    padding-left: ${({ theme, paddingTop }) => theme.spacing(paddingTop ?? 6)};
    padding-right: ${({ theme, paddingBottom }) => theme.spacing(paddingBottom ?? 6)};
    margin-left: auto;
    margin-right: auto;

    @media ${({ theme }) => theme.mediaQueries.maxSM} {
        max-width: 100%;
    }
    @media ${({ theme }) => theme.mediaQueries.minSM} {
        max-width: 80%;
    }
`;

export default Container;
