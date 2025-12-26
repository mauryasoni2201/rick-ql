import { Link } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import CommonHead from '../../components/CommonHead/CommonHead';

const NotFound = () => {
    const metaData = {
        title: 'RickQL - Page Not Found',
        description: 'Sorry, the page you are looking for doesn’t exist or has been moved. Please check the URL or navigate back to continue browsing.',
        keywords: 'Rick and Morty, RickQL, GraphQL, Rick and Morty API',
        og:{
            title: 'RickQL - Page Not Found',
            description: 'Sorry, the page you are looking for doesn’t exist or has been moved. Please check the URL or navigate back to continue browsing.',
            image: '/banner-image.png',
        }
    }
    return (
        <>
        <CommonHead metaData={metaData}/>
        <SectionLayout
            heading="Page Not Found"
            headingClasses="text-center pb-30"
            description="Sorry, the page you are looking for doesn’t exist or has been moved. Please check the URL or navigate back to continue browsing."
            descriptionClasses="text-center pb-30"
            sectionClasses="section-small"
        >
            <div className="text-center">
                <Link className="btn secondary" to="/">
                    Back to Home
                </Link>
            </div>
        </SectionLayout>
        </>
    );
};

export default NotFound;
