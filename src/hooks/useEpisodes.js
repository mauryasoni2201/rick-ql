import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_EPISODES = gql`
    query GetEpisodes($page: Int, $name: String) {
        episodes(page: $page, filter: { name: $name }) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                episode
            }
        }
    }
`;

const useEpisodes = ({ page = 1, name = '' }) => {
    const { data, loading, error, refetch } = useQuery(GET_EPISODES, {
        variables: { page, name },
        notifyOnNetworkStatusChange: true,
    });
    return { data, loading, error, refetch };
};

export default useEpisodes;
