const NoResults = ({ text = 'No results found.' }) => {
    return (
        <div className="not-found-wrapper">
            <p className="text-center">{text}</p>
        </div>
    );
};
export default NoResults;
