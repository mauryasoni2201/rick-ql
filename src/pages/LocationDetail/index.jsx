import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import useLocationDetail from '../../hooks/useLocationDetail';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import InformationCard from '../../components/InformationCard/InformationCard';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import useCharacterFavoriteStore from '../../store/favoritesStore';
import NoResults from '../../components/NoResults/NoResults';

const LocationDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { favorites, toggleFavorite } = useCharacterFavoriteStore();
    const { data, loading, error } = useLocationDetail({ id });

    useEffect(() => {
        if (!loading && !error && data && !data.location) {
            navigate('/404', { replace: true });
        }
    }, [loading, error, data, navigate]);

    useEffect(() => {
        if (error) {
            navigate('/500', { replace: true });
        }
    }, [error, navigate]);

    const locationDetails = useMemo(() => {
        if (!data?.location) return [];

        const createdAt = new Date(data.location.created).toLocaleDateString(
            'en-US',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            },
        );

        return [
            { label: 'Location Name', value: data.location.name },
            { label: 'Type', value: data.location.type },
            { label: 'Dimension', value: data.location.dimension },
            { label: 'Created At', value: createdAt },
        ];
    }, [data]);

    return (
        <SectionLayout
            heading="Location Detail"
            headingClasses="text-center pb-10"
            description="Explore the details of this location."
            descriptionClasses="text-center"
        >
            {loading && (
                <div className="pt-30">
                    <Skeleton count={30} height={10} />
                </div>
            )}

            {!loading && !error && data?.location && (
                <>
                    <InformationCard data={locationDetails} />

                    <div className="characters-listing pt-30">
                        <h4 className="text-center w-full py-4 pt-30">
                            The following characters were last seen at this
                            location.
                        </h4>

                        {data.location.residents.map((character) => (
                            <CharacterCard
                                key={character.id}
                                character={character}
                                favorites={favorites.includes(character.id)}
                                toggleFavorite={toggleFavorite}
                            />
                        ))}
                        {!loading &&
                            !error &&
                            data.location.residents.length === 0 && (
                                <NoResults />
                            )}
                    </div>
                </>
            )}
        </SectionLayout>
    );
};
export default LocationDetailPage;
