import React from "react";

//Hooks
import {usePetReturned} from "./hooks/usePetReturned";

export const PetReturned = () => {
    const {pet, error} = usePetReturned();

    const petJSX = pet && (
        <>
            <p>Id: {pet.id}</p>
            <p>Name: {pet.name}</p>
        </>
    );

    const errorJSX = error && (
        <p>Error: {error.message}</p>
    )
    return (
        <>
            <h1>Pet Returned</h1>
            {petJSX}
            {errorJSX}
        </>
    )
}