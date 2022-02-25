import {loader} from "graphql.macro";

//Hooks
import {useForm} from "../useForm";
import {useMutation} from "@apollo/client";

//Mutation
const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useCustomerAuth = () => {
    const [_logIn, {data}] = useMutation(mutationLogin);
    const {form, handleChange} = useForm({
        username: '',
        password: '',
    });

    const logIn = () => {
        _logIn({
            variables: form
        })
    };

    const authorizedCustomer = data && data.logIn;
    const token = authorizedCustomer && authorizedCustomer.token;

    if (token) {
       localStorage.setItem('token', token)
    }

    return {
        handleChange,
        logIn,
        authorizedCustomer,
    }
}