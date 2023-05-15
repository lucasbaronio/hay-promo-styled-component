import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../theme';
import { Link } from './Typography';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: ${({ theme }) => theme.colors.WHITE};
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: ${({ theme }) => theme.spacing(4)};
`;

const Container = styled(Card)`
    box-shadow: 0 20px 27px #0000000d;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.spacing(12)};
    box-sizing: border-box;
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: block;
    content: "";
    background: rgba(0,0,0,.4);
    border-radius: 0.375rem;
`;

const Image = styled.img`
    background-position: 50%;
    background-size: cover;
    margin-bottom: ${({ theme }) => theme.spacing(16)};
    /* width: 100%;
    height: 100%; */
    position: absolute;
    border-radius: inherit;
`;

const CardBody = styled.div`
    flex: 1 1 auto;
    color: ${({ theme }) => theme.colors.WHITE};
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(8)};
    padding-top: ${({ theme }) => theme.spacing(64)};
    box-sizing: border-box;
`;

const TitleContainer = styled.div`
    display: block;
    margin-top: ${({ theme }) => theme.spacing(64)};
`;

function CardCategory({
    thumb_src,
    title,
    // classList,
    // cta,
  }) {
  
    // const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );
  
    return (
      <>
        <a href="#">
          <Container>
            <Image width='100%' height='100%' src={thumb_src} />
            {/* <div className="full-background" style={{backgroundImage: `url(${thumb_src})`, backgroundSize: 'cover'}}></div> */}
            {/* <div className={`card-body ${classBody}`}> */}
            <CardBody>
              <TitleContainer>
                {/* <Link className="text-white">{title}</Link> */}
                <Link type="primary" font="h4SemiBold" component="a" color={COLORS.WHITE}>{title}</Link>
                {/* {(cta != null) && 
                  <a href="#" className="text-white mb-0">Shop now</a>  
                } */}
              </TitleContainer>
            </CardBody>
            <Mask />
          </Container>
        </a>
      </>
    );
  }

  CardCategory.propTypes = {
    thumb_src: PropTypes.string,
    title: PropTypes.string,
    // classList: PropTypes.string,
    cta: PropTypes.string,
}

export default CardCategory;