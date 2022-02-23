import {useLazyQuery} from "@apollo/client";
import { loader } from 'graphql.macro';

// Queries
const queryPetById = loader('./gql/queryPetById.graphql');

export const useQueryProfile = () => {
    const [getProfile, {error, loading, data}] = useLazyQuery(queryPetById);

    return {getProfile, loading, error, profile: data && data.petById}
};