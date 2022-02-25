//Core
import React from "react";

//Components
import {Counter} from "./counter";
import {List} from "./list";
import {SpecialList} from "./specialList";
import {Profile} from "./profile";
import {ChekinPet} from "./chekinPet";
import {PetReturned} from "./petReturned";

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <ChekinPet />
            <PetReturned />
            {/*<Profile />
            <Counter />
            <List />
            <SpecialList />*/}
        </>
    )
}