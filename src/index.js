import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import 'react-loading-skeleton/dist/skeleton.css';
import './index.css';
import './media.css';

const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.REACT_APP_API_URL,
    }),
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);