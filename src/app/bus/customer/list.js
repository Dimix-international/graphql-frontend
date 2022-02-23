//Core
import React from "react";

//Hooks
import {useAllCustomers} from "./hooks/useQueryAllCustomers";

export const List = () => {
    const{customers, loading, error} = useAllCustomers();

    const customersJSX = customers && customers.map(({name, username,dateCreated}) => (
        <p key={dateCreated}>
            <span>Created:{dateCreated} </span>
            <span>Name:{name} </span>
            <span>Nickname: {username}</span>
        </p>
    ))

    if(loading) return <p>loading ...</p>
    if(error) return <p>We hava a problem: {error.message}</p>

    return(
        <div>
            <h2>All customers</h2>
            {customersJSX}
        </div>
    )
}