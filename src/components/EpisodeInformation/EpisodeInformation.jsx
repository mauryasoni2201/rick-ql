const EpisodeInformation = ({ data }) => {
    const date = new Date(data?.created);
    const formatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className="episode-details">
            <div className="wrapper">
                <div className="item">
                    <div className="wrap-item">
                        <h2>
                            <b>Episode Number:</b>
                        </h2>
                        <h3>{data?.episode}</h3>
                    </div>
                </div>
                <div className="item">
                    <div className="wrap-item">
                        <h2>
                            <b>Episode Name:</b>
                        </h2>
                        <h3>{data?.name}</h3>
                    </div>
                </div>
                <div className="item">
                    <div className="wrap-item">
                        <h2>
                            <b>Live Date:</b>
                        </h2>
                        <h3>{data?.air_date}</h3>
                    </div>
                </div>
                <div className="item">
                    <div className="wrap-item">
                        <h2>
                            <b>Created At:</b>
                        </h2>
                        <h3>{formatted}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeInformation;
