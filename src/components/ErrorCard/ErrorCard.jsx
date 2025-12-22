const ErrorCard = ({ title, buttonOnClick }) => {
    return (
        <div className="error-card">
            <h2>{title}</h2>
            <div className="try-again-button">
                <button className="btn danger" onClick={buttonOnClick}>
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorCard;
