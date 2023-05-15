import styled from 'styled-components';
import { COLORS } from '../../theme';
import SearchIcon from '../../assets/icons/Search';

const Container = styled.div`
    width: 100%;
    display: flex;
    border: ${({ theme }) => `1px solid${theme.colors.LIGHT_400}`};
    border-radius: 10px;

    > input{
        width: 100%;
        border-radius: 10px;
    }
`;

const SearchIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.spacing(16)};
    height: ${({ theme }) => theme.spacing(16)};
    margin: ${({ theme }) => theme.spacing(0, 4, 0, 4)};;
`;

const SearchInput = styled.input`
    border: 0;
    width: 100%;
`;

const Search = () => {
    return (
        <Container>
            <SearchIconContainer>
                <SearchIcon color={COLORS.SECONDARY}/>
            </SearchIconContainer>
            <SearchInput />
        </Container>
    );
};

export default Search;