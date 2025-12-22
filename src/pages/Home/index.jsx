import SectionLayout from '../../layouts/SectionLayout/SectionLayout';

const Home = () => {
    return (
        <>
            <div className="hero-banner">
                <img src="/banner-image.png" alt="banner-image" />
            </div>
            <SectionLayout
                heading="Welcome to RickQL"
                headingClasses="text-center pb-10"
                description="Dive into the Rick and Morty universe with RickQL. Explore detailed character profiles, episode guides, and all the information you need in one place."
                descriptionClasses="text-center pb-30"
            >
                <div className="container">
                    <h2>Characters</h2>
                </div>
            </SectionLayout>
        </>
    );
};

export default Home;
