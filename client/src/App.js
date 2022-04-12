import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
// import {onError} from '@apollo/client'
import {GetUsers} from './components/GetUsers'

const errorLink = onError(({graphQLErrors, networkError}) => {
  if(graphQLErrors) {
    graphQLErrors.map(({message, location, path}) => {
      alert(`GraphQL error: ${message}`)
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:6969/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})



function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
    </ApolloProvider>
  );
}

export default App;
