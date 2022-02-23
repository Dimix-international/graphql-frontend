//Core
import React from "react";

//Hooks
import {useQueryProfile} from "./hooks/useQueryProfile";

export const Profile = () => {
    const {getProfile, error, loading, profile} = useQueryProfile();

    const loadProfile = () => {
        getProfile({
            variables: {
                id: 'C-1'
            }
        });
    }

    const profileJSX = profile && (<p>Profile <span>{profile?.name}</span></p>);

    if(loading) {
        return <p>loading ...</p>
    }
    if(error) {
        return <p>We hava a problem: {error.message}</p>
    }
    return (
        <>
            <button onClick={loadProfile}>get profile</button>
            {profileJSX}

        </>
    )
}