import { useLocation } from 'react-router-dom';

const CommonHead = ({ metaData }) => {
    const location = useLocation();
    const currentUrl = `${window.location.origin}${location.pathname}`;
    return (
        <>
            <title>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <meta name="keywords" content={metaData.keywords} />

            <link rel="canonical" href={currentUrl} />

            <meta property="og:title" content={metaData.og.title} />
            <meta property="og:description" content={metaData.og.description} />
            <meta property="og:image" content={metaData.og.image} />
            <meta property="og:url" content={currentUrl} />
        </>
    );
};

export default CommonHead;
