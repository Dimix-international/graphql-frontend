import {useMutation} from "@apollo/client";
import {loader} from "graphql.macro";
import {useState} from "react";

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckin = () => {
    const [_checkIn, {data, error}] = useMutation(mutationCheckIn);
    const [_error, _setError] = useState(false)

    const checkIn = (id) => {
        /*_checkIn({
            variables: {
                id
            }
        })*/
        (async () => {
            try {
                await _checkIn({
                    variables: {
                        id
                    }
                })
            } catch (error) {
                _setError(error.message)
            }
        })()
    };

    const pet = data && data.checkIn.pet;

    return {
        checkIn,
        pet,
        error,
    }
}