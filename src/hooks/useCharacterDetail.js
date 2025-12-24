import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_CHARACTER_DETAIL = gql`
    query GetCharacterDetail($id: ID!) {
        character(id: $id) {
            name
            status
            species
            gender
            image
            origin {
                name
            }
            location {
                name
                id
            }
            episode {
                id
                name
                episode
            }
        }
    }
`;

const useCharacterDetail = ({ id }) => {
    const { data, loading, error, refetch } = useQuery(GET_CHARACTER_DETAIL, {
        variables: { id },
        notifyOnNetworkStatusChange: true,
    });

    return { data, loading, error, refetch };
};

export default useCharacterDetail;
