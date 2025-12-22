import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_EPISODE_DETAIL = gql`
    query GetEpisode($id: ID!) {
        episode(id: $id) {
            name
            episode
            air_date
            created
            characters {
                id
                name
                image
                gender
                status
                location {
                    id
                    name
                }
            }
        }
    }
`;

const useEpisodeDetail = ({ id }) => {
    const { data, loading, error, refetch } = useQuery(GET_EPISODE_DETAIL, {
        variables: { id },
        notifyOnNetworkStatusChange: true,
    });
    return { data, loading, error, refetch };
};
export default useEpisodeDetail;
