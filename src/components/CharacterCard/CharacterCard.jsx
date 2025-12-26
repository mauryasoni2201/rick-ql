import { Link } from 'react-router-dom';

const CharacterCard = ({
    character,
    favorites,
    toggleFavorite = () => {},
    removeFavorite = false,
    handleRemoveFavorite = () => {},
}) => {
    if (!character) return null;

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleToggleFavorite = (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite(character.id);
    };

    return (
        <div className="character-card-wrapper">
            <div className="character-card">
                <Link
                    to={`/characters/${character?.id}`}
                    className="image"
                    onClick={scrollTop}
                >
                    <img
                        src={character?.image}
                        alt={character?.name}
                        loading="lazy"
                    />
                    <div className="favorites">
                        <button
                            onClick={
                                removeFavorite
                                    ? handleRemoveFavorite
                                    : handleToggleFavorite
                            }
                            className={`heart ${favorites ? 'active' : ''}`}
                        ></button>
                    </div>
                </Link>

                <div className="content">
                    <h2>
                        <Link
                            to={`/characters/${character?.id}`}
                            onClick={scrollTop}
                        >
                            {character?.name}
                        </Link>
                    </h2>

                    <div className="status">
                        <span
                            className={`round ${character?.status?.toLowerCase()}`}
                        ></span>
                        <span>
                            {character?.status
                                ? character.status.charAt(0).toUpperCase() +
                                  character.status.slice(1)
                                : 'Unknown'}{' '}
                            -{' '}
                            {character?.gender
                                ? character.gender.charAt(0).toUpperCase() +
                                  character.gender.slice(1)
                                : 'Unknown'}
                        </span>
                    </div>

                    {character?.location && (
                        <p className="location">
                            <span className="label">Last known location:</span>
                            {character?.location?.id ? (
                                <Link
                                    to={`/location/${character.location.id}`}
                                    onClick={scrollTop  }
                                >
                                    {character.location.name}
                                </Link>
                            ) : (
                                <span>Unknown</span>
                            )}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default CharacterCard;
