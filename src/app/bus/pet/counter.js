//Core
import React from "react";

//Hooks
import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets";

export const Counter = () => {
    const {loading, error, data, refetch, networkStatus} = useQueryAvailablePets();
    //refetch - принудительный перезапрос данных
    //networkStatus - возвращает цифры - информация о запросе https://github.com/apollographql/apollo-client/blob/master/src/core/networkStatus.ts#L4

    if(loading) {
        return <p>loading ...</p>
    }
    if(networkStatus === 4) {
        return <p>loading ...</p>
    }
    if(error) {
        return <p>We hava a problem: {error.message}</p>
    }
    return (
        <p>AvailablePets:
            {data.availablePets}
        </p>
    )
}