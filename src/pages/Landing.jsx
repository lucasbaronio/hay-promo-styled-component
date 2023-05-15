import data from '../assets/data.json';
import PromoSectionLarge from "../components/PromoSectionLarge";
// import CardCategory from '../components/CardCategory';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import { Container } from '../components/Layout';
import CategoryPreview from '../components/CategoryPrevies.jsx/CategoryPreview';

const Main = styled(Container)`
    margin-top: ${({ theme }) => theme.spacing(24)};
    margin-bottom: ${({ theme }) => theme.spacing(24)};
    box-sizing: border-box;
`;

const Landing = () => {
    return (
        <section>
            <Header />
            <PromoSectionLarge 
                title={"Check out our new collection"}
                full_description={data.products[0].full_description}  
                pageHeaderBgImg={"https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"}
                pageHeaderMinVh="90vh"
            />
            <Main>
                <CategoryPreview categories={data.categories}/>

                <PromoSectionLarge 
                    title={data.products[3].title}
                    full_description={data.products[0].full_description} 
                    pageHeaderBgImg={"https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"} 
                    pageHeaderMinVh="50vh"
                    pageHeaderRadius="1rem"
                />
                {/* <div className="my-5">
                    <ProductFeature
                    title={data.products[0].title}
                    images={data.products[2].images}
                    full_description={data.products[0].full_description}
                    featuresDetails={data.products[0].featuresDetails}
                    />
                </div>
                <div className="mt-5 mb-10">
                    <TestimonialsFade 
                    pageHeaderBgImg={"https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80"} 
                    pageHeaderMinVh="50vh"
                    />
                </div>
                
                <StoreDoubleColumn /> */}

            </Main>
        </section>
    );
}

export default Landing;