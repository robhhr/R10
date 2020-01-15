import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

const ApolloWrapper = ({children, ...props}) => {
  return (
    <ApolloProvider client={client} {...props}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloWrapper;
