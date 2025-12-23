import { useState } from 'react';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Banner from '../../components/Banner/Banner';
import useCharacters from '../../hooks/useCharacters';
import useEpisodes from '../../hooks/useEpisodes';
import Skeleton from 'react-loading-skeleton';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import NoResults from '../../components/NoResults/NoResults';
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import SectionList from '../../components/SectionList/SectionList';
import useCharacterFavoriteStore from '../../store/favoritesStore';

const initialPage = 1;

const Home = () => {
    const { favorites, toggleFavorite } = useCharacterFavoriteStore();
    const [page, setPage] = useState(initialPage);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');

    const { data, loading, error } = useCharacters({
        page,
        name,
        status,
        gender,
    });

    const {
        data: episodesData,
        loading: episodesLoading,
        error: episodesError,
    } = useEpisodes({ name: '', page: initialPage });

    const resetFilters = () => {
        setPage(initialPage);
        setName('');
        setStatus('');
        setGender('');
    };

    const characters = data?.characters?.results || [];
    const episodes = episodesData?.episodes?.results || [];

    return (
        <>
            <Banner src={'/banner-image.png'} />
            <SectionLayout
                heading="Welcome to RickQL"
                headingClasses="text-center pb-10"
                description="Dive into the Rick and Morty universe with RickQL. Explore detailed character profiles, episode guides, and all the information you need in one place."
                descriptionClasses="text-center pb-30"
            >
                <SectionList title="Characters" viewAllLink="/characters">
                    <div className="characters-listing pb-30">
                        {loading &&
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="character-card-wrapper">
                                    <Skeleton height={15} count={20} />
                                </div>
                            ))}

                        {!loading &&
                            characters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    character={character}
                                    favorites={favorites.includes(character.id)}
                                    toggleFavorite={toggleFavorite}
                                />
                            ))}
                        {!loading && !error && characters.length === 0 && (
                            <NoResults />
                        )}
                        {error && (
                            <ErrorCard
                                title="Something went wrong! Please try again."
                                buttonOnClick={resetFilters}
                            />
                        )}
                    </div>
                </SectionList>
                <SectionList title="Episodes" viewAllLink="/episodes">
                    <div className="episodes-listing">
                        {episodesLoading &&
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="episodes-card-wrapper">
                                    <Skeleton count={6} height={12} />
                                </div>
                            ))}
                        {!episodesLoading &&
                            episodes.map((episode) => (
                                <EpisodeCard
                                    key={episode.id}
                                    episode={episode}
                                />
                            ))}
                        {!episodesLoading &&
                            !episodesError &&
                            episodes.length === 0 && <NoResults />}
                        {episodesError && (
                            <ErrorCard
                                title="Something went wrong! Please try again."
                                buttonOnClick={resetFilters}
                            />
                        )}
                    </div>
                </SectionList>
            </SectionLayout>
        </>
    );
};
export default Home;
