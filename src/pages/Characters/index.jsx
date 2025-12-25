import { useState, useEffect } from 'react';
import useCharacters from '../../hooks/useCharacters';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Skeleton from 'react-loading-skeleton';
import Pagination from '../../components/Pagination/Pagination';
import NoResults from '../../components/NoResults/NoResults';
import selectOptions from '../../utils/selectOptions';
import useCharacterFavoriteStore from '../../store/favoritesStore';
import { useNavigate } from 'react-router-dom';

const initialPage = 1;

const Home = () => {
    const { favorites, toggleFavorite } = useCharacterFavoriteStore();
    const navigate = useNavigate();
    const [page, setPage] = useState(initialPage);
    const [searchInput, setSearchInput] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');

    const { data, loading, error } = useCharacters({
        page,
        name,
        status,
        gender,
    });

    const resetFilters = () => {
        setPage(initialPage);
        setSearchInput('');
        setName('');
        setStatus('');
        setGender('');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setName(searchInput.toLowerCase().trim());
            setPage(initialPage);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchInput]);

    useEffect(() => {
        if (error) {
            navigate('/500', { replace: true });
        }
    }, [error, navigate]);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const characters = data?.characters?.results || [];
    const pages = data?.characters?.info?.pages || 0;

    return (
        <SectionLayout
            headingClasses="text-center pb-10"
            heading="Ricky & Morty Characters"
            description="Explore the characters from the Ricky & Morty show"
            descriptionClasses="text-center pb-30"
        >
            <div className="filters-wrapper">
                <div className="filter-item">
                    <select
                        value={status}
                        onChange={(e) => {
                            setStatus(e.target.value);
                            setPage(initialPage);
                        }}
                        className="form-select"
                    >
                        {selectOptions.status.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-item">
                    <select
                        value={gender}
                        onChange={(e) => {
                            setGender(e.target.value);
                            setPage(initialPage);
                        }}
                        className="form-select"
                    >
                        {selectOptions.gender.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-item">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search character..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                <div className="w-full py-4 clear-filters">
                    <button className="btn danger" onClick={resetFilters}>
                        Reset Filters
                    </button>
                </div>
            </div>
            <div className="characters-listing">
                {loading &&
                    Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="character-card-wrapper">
                            <Skeleton height={15} count={20} />
                        </div>
                    ))}

                {!loading &&
                    characters.map((character) => (
                        <CharacterCard
                            favorites={favorites.includes(character.id)}
                            toggleFavorite={toggleFavorite}
                            key={character.id}
                            character={character}
                        />
                    ))}

                {!loading && !error && characters.length === 0 && <NoResults />}
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

export default Home;
