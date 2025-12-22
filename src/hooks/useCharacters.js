import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_CHARACTERS = gql`
    query GetCharacters(
        $page: Int
        $name: String
        $status: String
        $gender: String
    ) {
        characters(
            page: $page
            filter: { name: $name, status: $status, gender: $gender }
        ) {
            info {
                count
                pages
                next
                prev
            }
            results {
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

const useCharacters = ({
    page = 1,
    name = '',
    status = '',
    gender = '',
}) => {
    const { data, loading, error, refetch } = useQuery(GET_CHARACTERS, {
        variables: { page, name, status, gender },
        notifyOnNetworkStatusChange: true,
    });

    return { data, loading, error, refetch };
};

export default useCharacters;
