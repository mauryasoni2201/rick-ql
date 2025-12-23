import { Link } from 'react-router-dom';

const CharacterCard = ({
    character,
    favorites,
    toggleFavorite = () => {},
    removeFavorite = false,
    handleRemoveFavorite = () => {},
}) => {
    if (!character) return null;

    const handleToggleFavorite = (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite(character.id);
    };

    return (
        <div className="character-card-wrapper">
            <div className="character-card">
                <Link to={`/characters/${character.id}`} className="image">
                    <img
                        src={character.image}
                        alt={character.name}
                        loading="lazy"
                    />
                    <div className="favorites">
                        <Link
                            to="#"
                            onClick={
                                removeFavorite
                                    ? handleRemoveFavorite
                                    : handleToggleFavorite
                            }
                            className={`heart ${favorites ? 'active' : ''}`}
                        ></Link>
                    </div>
                </Link>

                <div className="content">
                    <h2>
                        <Link to={`/characters/${character.id}`}>
                            {character.name}
                        </Link>
                    </h2>

                    {/* Status */}
                    <div className="status">
                        <span
                            className={`round ${character.status?.toLowerCase()}`}
                        ></span>
                        <span>
                            {character.status
                                ? character.status.charAt(0).toUpperCase() +
                                  character.status.slice(1)
                                : 'Unknown'}{' '}
                            -{' '}
                            {character.gender?.charAt(0).toUpperCase() +
                                character.gender?.slice(1) || 'Unknown'}
                        </span>
                    </div>

                    {/* Location */}
                    <p className="location">
                        <span className="label">Last known location:</span>
                        {character.location?.id ? (
                            <Link to={`/location/${character.location.id}`}>
                                {character.location.name}
                            </Link>
                        ) : (
                            <span>Unknown</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CharacterCard;
