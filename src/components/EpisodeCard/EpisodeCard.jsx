import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode }) => {
    return (
        <div className="episodes-card-wrapper">
            <div className="episode-card">
                <Link to={`/episodes/${episode.id}`}>
                    <h2>{episode.name}</h2>
                    <p>{episode.episode}</p>
                </Link>
            </div>
        </div>
    );
};

export default EpisodeCard;
