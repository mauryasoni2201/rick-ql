import SectionLayout from '../../layouts/SectionLayout/SectionLayout';

const ServerError = () => {
    return (
        <SectionLayout
            heading="Server Error"
            headingClasses="text-center pb-30"
            description="Sorry, the server encountered an error. Please try again later or navigate back to continue browsing."
            descriptionClasses="text-center pb-30"
            sectionClasses="section-small"
        ></SectionLayout>
    );
};
export default ServerError;
