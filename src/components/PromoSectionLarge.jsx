import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../theme';
import Button from './Button';
import { Container } from './Layout';
import Typography from './Typography/Typography';

const PageHeader = styled.div`
    padding: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: 50%;

    @media ${({ theme }) => theme.mediaQueries.maxMD} {
      padding-top: ${({ theme }) => theme.spacing(24)};
      padding-bottom: ${({ theme }) => theme.spacing(24)};
    }
    @media ${({ theme }) => theme.mediaQueries.minMD} {
      padding-top: ${({ theme }) => theme.spacing(0)};
      padding-bottom: ${({ theme }) => theme.spacing(0)};
    }
`;

const Mask = styled.span`
    position: absolute;
    background-size: cover;
    background-position: center center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .7;

    background-image: linear-gradient(195deg, #323a54, #1a2035);
`;

const StyledTypography = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`

const Lead = styled(Typography)`
  @media ${({ theme }) => theme.mediaQueries.minMD} {
    margin-bottom: ${({ theme }) => theme.spacing(32)};
  }
  @media ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: ${({ theme }) => theme.spacing(12)};
  }
`

const StyledContainer = styled(Container)`
  z-index: 1;
`;

const CenterColumn = styled.div`
  flex: 0 0 auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media ${({ theme }) => theme.mediaQueries.maxSM} {
    width: 100%;
  }
  @media ${({ theme }) => theme.mediaQueries.minSM} {
    width: 75%;
  }
  @media ${({ theme }) => theme.mediaQueries.minLG} {
    width: 67%;
  }
`

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function PromoSectionLarge({
    title,
    full_description,
    pageHeaderBgImg,
    pageHeaderMinVh,
    pageHeaderRadius,
  }) {
  
    const styles = {
      pageHeader: {
        backgroundImage: 'url(' + pageHeaderBgImg + ')',
        minHeight: pageHeaderMinVh,
        borderRadius: pageHeaderRadius
      },
    };
  
    return (
      <section>
        <PageHeader style={styles.pageHeader}>
          <Mask />
          <StyledContainer>
            <FlexRow>
              <CenterColumn>
                <StyledTypography type="primary" font="h1" component="h1" color={COLORS.WHITE}>{title}</StyledTypography>
                <Lead type="primary" font="mediumRegular" component="p" color={COLORS.WHITE}>{full_description}</Lead>
                <Button type="secondaryLarge" className="btn btn-white btn-lg">Show new arrivals</Button>
              </CenterColumn>
            </FlexRow>
          </StyledContainer>
        </PageHeader>
      </section>
    );
  }

PromoSectionLarge.propTypes = {
    title: PropTypes.string,
    full_description: PropTypes.string,
    pageHeaderBgImg: PropTypes.string,
    pageHeaderMinVh: PropTypes.string,
    pageHeaderRadius: PropTypes.string,
}

export default PromoSectionLarge;