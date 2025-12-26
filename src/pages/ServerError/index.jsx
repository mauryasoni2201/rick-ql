import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import CommonHead from '../../components/CommonHead/CommonHead';

const ServerError = () => {
    const metaData = {
        title: 'RickQL - Server Error',
        description: 'Sorry, the server encountered an error. Please try again later or navigate back to continue browsing.',
        keywords: 'Rick and Morty, RickQL, GraphQL, Rick and Morty API',
        og:{
            title: 'RickQL - Server Error',
            description: 'Sorry, the server encountered an error. Please try again later or navigate back to continue browsing.',
            image: '/banner-image.png',
        }
    }
    return (
        <>
        <CommonHead metaData={metaData}/>
        <SectionLayout
            heading="Server Error"
            headingClasses="text-center pb-30"
            description="Sorry, the server encountered an error. Please try again later or navigate back to continue browsing."
            descriptionClasses="text-center pb-30"
            sectionClasses="section-small"
        ></SectionLayout>
        </>
    );
};
export default ServerError;
