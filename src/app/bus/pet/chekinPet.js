import React from "react";
import {useCheckin} from "./hooks/useCheckin";


export const ChekinPet = () => {
    const {checkIn, pet, error} = useCheckin();

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
        <div>
            <h2>CheckIn</h2>
            <button onClick={() => checkIn('C-5')}>CheckIn</button>
            {petJSX}
            {errorJSX}
        </div>

    )
}