import React from "react";

import {useCustomerAuth} from "./hooks/useCustomerAuth";

export const Login = () => {
    const {handleChange, logIn, authorizedCustomer} = useCustomerAuth();
    const authorizedCustomerJSX = authorizedCustomer && (
        <>
            <p>Authorized Customer: {authorizedCustomer.customer.name}</p>
        </>
    )
    return (
        <div>
            <h1>login</h1>
            <input
                type="text"
                placeholder={'username'}
                name={'username'}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder={'password'}
                name={'password'}
                onChange={handleChange}
            />
            <button
                type={'submit'}
                onClick={logIn}
            >Login
            </button>
            {authorizedCustomerJSX}
        </div>
    )
}