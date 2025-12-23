const NoResults = ({
    text = 'No results found. Try adjusting your search or filters.',
}) => {
    return (
        <div className="not-found-wrapper">
            <p className="text-center">{text}</p>
        </div>
    );
};
export default NoResults;
