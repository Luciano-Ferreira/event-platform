import { Event } from './pages/Event';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';

import { Router } from './routes/Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
