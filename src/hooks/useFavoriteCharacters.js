import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useMemo } from 'react';

const GET_CHARACTERS_BY_IDS = gql`
    query GetCharactersByIds($ids: [ID!]!) {
        charactersByIds(ids: $ids) {
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
`;

const useLikedCharacters = ({ ids = [], page = 1, limit = 20 }) => {
    const start = (page - 1) * limit;
    const end = page * limit;

    // ⬅️ only send required IDs to backend
    const pagedIds = useMemo(() => ids.slice(start, end), [ids, start, end]);

    const { data, loading, error, refetch } = useQuery(GET_CHARACTERS_BY_IDS, {
        variables: { ids: pagedIds },
        skip: pagedIds.length === 0,
        notifyOnNetworkStatusChange: true,
    });

    const totalPages = Math.ceil(ids.length / limit);

    return {
        characters: data?.charactersByIds || [],
        info: {
            count: ids.length,
            pages: totalPages,
            next: page < totalPages ? page + 1 : null,
            prev: page > 1 ? page - 1 : null,
        },
        loading,
        error,
        refetch,
    };
};

export default useLikedCharacters;
