//Core
import React from "react";

//Components
import {List} from "./list";
import {NewCustomer} from "./newCustomer";


export const Customer = () => {
    return (
        <>
            <NewCustomer />
            <List />
        </>
    )
}