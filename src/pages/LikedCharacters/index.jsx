import { useState, useEffect } from 'react';
import useLikedCharacters from '../../hooks/useFavoriteCharacters';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import useCharacterFavoriteStore from '../../store/favoritesStore';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import NoResults from '../../components/NoResults/NoResults';
import Pagination from '../../components/Pagination/Pagination';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { showSuccess } from '../../utils/toast';
import { useNavigate } from 'react-router-dom';

const INITIAL_PAGE = parseInt(process.env.REACT_APP_INITIAL_PAGE, 10) || 1;
const LIMIT = parseInt(process.env.REACT_APP_ITEMS_PER_PAGE, 10) || 20;

const LikedCharacters = () => {
    const [page, setPage] = useState(INITIAL_PAGE);
    const { favorites, toggleFavorite } = useCharacterFavoriteStore();
    const navigate = useNavigate();

    const hasFavorites = favorites.length > 0;

    const {
        characters = [],
        info,
        error,
        loading,
    } = useLikedCharacters({
        ids: favorites,
        page,
        limit: LIMIT,
        skip: !hasFavorites,
    });

    const pages = info?.pages ?? 0;

    useEffect(() => {
        if (pages > 0 && page > pages) {
            setPage(pages);
        }
    }, [pages, page]);

    useEffect(() => {
        setPage(INITIAL_PAGE);
    }, [favorites]);

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleRemoveFavorite = (e, character) => {
        e.preventDefault();
        e.stopPropagation();

        if (!character?.id) return;

        toggleFavorite(character.id);
        showSuccess('Removed from your favorites');
    };

    useEffect(() => {
        if (error) {
            navigate('/500', { replace: true });
        }
    }, [error, navigate]);

    return (
        <SectionLayout
            heading="Liked Characters"
            headingClasses="text-center pb-10"
            description="Your favorite characters from the Rick and Morty universe"
            descriptionClasses="text-center pb-30"
        >
            <div className="characters-listing">
                {loading && <FullPageLoader />}

                {!loading &&
                    characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                            favorites={favorites.includes(character.id)}
                            removeFavorite
                            handleRemoveFavorite={(e) =>
                                handleRemoveFavorite(e, character)
                            }
                        />
                    ))}

                {!loading && !error && !hasFavorites && (
                    <NoResults text="No liked characters found." />
                )}
            </div>

            {pages > 1 && (
                <div className="pagination-wrapper">
                    <Pagination
                        pageCount={pages}
                        onPageChange={handlePageClick}
                        forcePage={page - 1}
                    />
                </div>
            )}
        </SectionLayout>
    );
};

export default LikedCharacters;
