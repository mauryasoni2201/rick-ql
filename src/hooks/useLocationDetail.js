import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_LOCATION_DETAIL = gql`
    query GetLocationDetail($id: ID!) {
        location(id: $id) {
            name
            type
            dimension
            created
            residents {
                id
                name
                image
                gender
                status
            }
        }
    }
`;

const useLocationDetail = ({ id }) => {
    const { data, loading, error, refetch } = useQuery(GET_LOCATION_DETAIL, {
        variables: { id },
        notifyOnNetworkStatusChange: true,
    });

    return { data, loading, error, refetch };
};
export default useLocationDetail;
