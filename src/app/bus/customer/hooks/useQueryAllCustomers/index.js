import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";

//Queries
const queryAllCustomers = loader('./gql/queryAllCustomers.graphql');

export const useAllCustomers = () => {
    const {data, loading, error} = useQuery(queryAllCustomers);

    const customers = data ? data.allCustomers : null;

    return {customers, loading, error}
}