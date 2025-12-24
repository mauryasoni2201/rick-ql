import { useParams, useNavigate } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import useCharacterDetail from '../../hooks/useCharacterDetail';
import Skeleton from 'react-loading-skeleton';
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import InformationCard from '../../components/InformationCard/InformationCard';
import { useMemo, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import NoResults from '../../components/NoResults/NoResults';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';

const CharacterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, loading, error, refetch } = useCharacterDetail({ id });

    useEffect(() => {
        if (!loading && !error && data && !data.character) {
            navigate('/404', { replace: true });
        }
    }, [loading, error, data, navigate]);

    const characterDetails = useMemo(() => {
        if (!data?.character) return [];
        return [
            { label: 'Name', value: data.character.name },
            { label: 'Status', value: data.character.status },
            { label: 'Species', value: data.character.species },
            { label: 'Gender', value: data.character.gender },
            {
                label: 'Location',
                value: data.character.location.name,
                link: `/location/${data.character.location.id}`,
            },
            {
                label: 'Origin',
                value: data.character.origin.name,
            },
        ];
    }, [data]);

    return (
        <SectionLayout
            heading="Character details"
            headingClasses="text-center pb-10"
            description="Explore the details of character."
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

            {!loading && !error && data?.character && (
                <div>
                    <div className="character-detail pt-30">
                        <Banner src={data?.character?.image} />
                        <InformationCard
                            className={'m-0'}
                            data={characterDetails}
                        />
                    </div>
                    <div className="h4 pt-30 pb-30 text-center">
                        Character appeared in these much episodes
                    </div>
                    <div className="episodes-listing">
                        {data?.character.episode?.map((episode) => (
                            <EpisodeCard episode={episode} key={episode?.id} />
                        ))}
                        {data?.character.episode?.length === 0 && <NoResults />}
                    </div>
                </div>
            )}
        </SectionLayout>
    );
};

export default CharacterDetail;
