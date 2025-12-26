import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import useEpisodeDetail from '../../hooks/useEpisodeDetail';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import InformationCard from '../../components/InformationCard/InformationCard';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Skeleton from 'react-loading-skeleton';
import useCharacterFavoriteStore from '../../store/favoritesStore';
import CommonHead from '../../components/CommonHead/CommonHead';

const EpisodeDetail = () => {
    const { favorites, toggleFavorite } = useCharacterFavoriteStore();
    const { id } = useParams();
    const navigate = useNavigate();
    const episodeId = Number(id);

    const { data, error, loading } = useEpisodeDetail({
        id: episodeId,
    });

    useEffect(() => {
        if (!loading && !error && data && !data.episode) {
            navigate('/404', { replace: true });
        }
    }, [loading, error, data, navigate]);

    useEffect(() => {
        if (error) {
            navigate('/500', { replace: true });
        }
    }, [error, navigate]);

    const episodeDetails = useMemo(() => {
        if (!data?.episode) return [];

        const createdAt = new Date(data.episode.created).toLocaleDateString(
            'en-US',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            },
        );

        return [
            { label: 'Episode Number', value: data.episode.episode },
            { label: 'Episode Name', value: data.episode.name },
            { label: 'Live Date', value: data.episode.air_date },
            { label: 'Created At', value: createdAt },
        ];
    }, [data]);

    const metaData = {
        title: 'RickQL - Episode Detail',
        description: 'Explore the details of this episode.',
        keywords: 'Rick and Morty, RickQL, GraphQL, Rick and Morty API',
        og:{
            title: 'RickQL - Episode Detail',
            description: 'Explore the details of this episode.',
            image: '/banner-image.png',
        }
    }
    return (
        <>
        <CommonHead metaData={metaData}/>
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

            {!loading && !error && data?.episode && (
                <>
                    <InformationCard data={episodeDetails} />

                    <div className="characters-listing pt-30">
                        <h4 className="text-center w-full py-4 pt-30">
                            The following characters appeared in this episode.
                        </h4>

                        {data.episode.characters.map((character) => (
                            <CharacterCard
                                key={character.id}
                                character={character}
                                favorites={favorites.includes(character.id)}
                                toggleFavorite={toggleFavorite}
                            />
                        ))}
                    </div>
                </>
            )}
        </SectionLayout>
        </>
    );
};
export default EpisodeDetail;
