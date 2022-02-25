//Core
import {loader} from "graphql.macro";
import {useSubscription} from "@apollo/client";

//Subscriptions
const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const usePetReturned = () => {
    const {data, error} = useSubscription(subscriptionPetReturned);

    const pet = data ? data.petReturned.pet : null;

    return {
        error,
        pet,
    }
}