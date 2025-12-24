import { Link } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';

const NotFound = () => {
    return (
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
    );
};

export default NotFound;
