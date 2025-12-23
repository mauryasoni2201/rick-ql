import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useEpisodeDetail from '../../hooks/useEpisodeDetail';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import EpisodeInformation from '../../components/EpisodeInformation/EpisodeInformation';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Skeleton from 'react-loading-skeleton';
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import useCharacterFavoriteStore from '../../store/favoritesStore';

const EpisodeDetail = () => {
    const { favorites, toggleFavorite } = useCharacterFavoriteStore();
    const { id } = useParams();
    const navigate = useNavigate();
    const episodeId = Number(id);

    const { data, error, loading, refetch } = useEpisodeDetail({
        id: episodeId,
    });

    useEffect(() => {
        if (!loading && !error && data && !data.episode) {
            navigate('/404', { replace: true });
        }
    }, [loading, error, data, navigate]);

    return (
        <SectionLayout
            headingClasses="text-center"
            heading="Episode Details"
            description="Explore the full information about this episode."
            descriptionClasses="text-center"
        >
            {loading && (
                <div className="pt-30">
                    <Skeleton count={30} height={10} />
                </div>
            )}

            {error && (
                <div className="pt-30">
                    <ErrorCard
                        title="Something went wrong! Please try again."
                        buttonOnClick={refetch}
                    />
                </div>
            )}

            {!loading && !error && data?.episode && (
                <>
                    <EpisodeInformation data={data.episode} />

                    <div className="characters-listing pt-30">
                        <h4 className="text-center w-full py-4 pt-30">
                            The following characters appeared in this episode.
                        </h4>

                        {data.episode.characters.map((character) => (
                            <CharacterCard
                                favorites={favorites.includes(character.id)}
                                toggleFavorite={toggleFavorite}
                                key={character.id}
                                character={character}
                            />
                        ))}
                    </div>
                </>
            )}
        </SectionLayout>
    );
};
export default EpisodeDetail;
