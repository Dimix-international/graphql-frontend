//Core
import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
    return useQuery(queryAvailablePets, {
        //variables: {type}, //смотрим поле type из variables, предположим что это поле не обязательно
        //pollInterval: 500, //каждый 500 милсек идет запрос
        //skip: !type, //не делать запрос при условии
    });
};