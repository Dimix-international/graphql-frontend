// Core
import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

//работа с подписками
import {split} from "@apollo/client";
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from "@apollo/client/utilities";

const root = 'funded-pet-library.moonhighway.com/'; //неизменная часть
// GraphQL Server
const uri = `https://${root}`;
const httpLink = createHttpLink({
    uri
});

//WebSocket - для подписок
const wsLink = new WebSocketLink({
    uri: `wss://${root}graphql`,
    options: {
        reconnect: true
    }
})

//Auth
const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
});

const wrapperHttpLink = authLink.concat(httpLink);

//будет выбирать использовать httpLink или wsLink
//1-ый параметр функция с логикой которая будет выбирать метод подключения
const link = split(
    ({query}) => {
        // по query понимаем что мы делаем ( query, mutation, subscription)
        const definition = getMainDefinition(query); //понять какого рода операцию выполняем
        return (
            definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
        )
    },
    wsLink,
    wrapperHttpLink,
)

//Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
    link,
    cache,
});
