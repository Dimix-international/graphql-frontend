//Core
import React from "react";
import {ApolloProvider} from "@apollo/client";

//components
import {Pet} from "./bus/pet";
import {Customer} from "./bus/customer";

//Other
import {client} from "./init/client";
import {Login} from "./bus/customer/login";


export const App = () => {
    return(
        <>
            <ApolloProvider client={client}>
                {/*<Customer />*/}
                <Login />
                <Pet />
            </ApolloProvider>
        </>
    )
}