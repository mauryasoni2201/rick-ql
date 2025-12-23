import { Link } from 'react-router-dom';

const SectionList = ({
    title,
    viewAllLink = '/',
    viewAllText = 'View All',
    children,
}) => {
    return (
        <>
            <div className="section-header pb-30">
                <h2>{title}</h2>
                <Link className="btn secondary" to={viewAllLink}>
                    {viewAllText}
                </Link>
            </div>
            {children}
        </>
    );
};

export default SectionList;
