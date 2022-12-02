import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from "@apollo/client";
import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
const apiUrl = 'localhost:8081'
const httpLink = createHttpLink({
    uri: `http://${apiUrl}/api/graphql`,

});
export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);

reportWebVitals();
