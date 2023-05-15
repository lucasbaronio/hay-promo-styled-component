import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardCategory from '../CardCategory';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

const GalleryFlexWrap = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${({ theme }) => theme.spacing(24)};
    margin-left: ${({ theme }) => theme.spacing(-6)};
    margin-right: ${({ theme }) => theme.spacing(-6)};
`

const Column = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-left: ${({ theme }) => theme.spacing(6)};
    padding-right: ${({ theme }) => theme.spacing(6)};
    box-sizing: border-box;
    
    @media ${({ theme }) => theme.mediaQueries.minMD} {
        width: 50%;
        flex: 0 0 auto;
    }
    @media ${({ theme }) => theme.mediaQueries.minLG} {
        width: 25%;
        flex: 0 0 auto;
    }
`;

const CategoryPreview = ({ categories }) => {
    return (
        <>
            <Header>
                <h4>Shop by category</h4>
                <a className="text-primary text-sm font-weight-bold" href="#">Browse all categories</a>
            </Header>
            <GalleryFlexWrap>
                {categories.map(category =>
                    <Column key={category.id}>
                        <CardCategory
                            thumb_src = {category.thumb_src}
                            title = {category.title}
                        />
                    </Column>
                )}
            </GalleryFlexWrap>
        </>
    );
};

CategoryPreview.propTypes = {
    categories: PropTypes.array,
};

export default CategoryPreview;
