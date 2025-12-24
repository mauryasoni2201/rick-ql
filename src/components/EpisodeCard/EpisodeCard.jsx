import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode }) => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="episodes-card-wrapper">
            <div className="episode-card">
                <Link to={`/episodes/${episode.id}`} onClick={scrollTop}>
                    <h2>{episode.name}</h2>
                    <p>{episode.episode}</p>
                </Link>
            </div>
        </div>
    );
};

export default EpisodeCard;
