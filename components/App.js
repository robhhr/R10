import React from 'react'
import ApolloWrapper from '../apollo/Apollo'
import Routes from '../navigation/Routes'

const App = () => {
  return (
    <ApolloWrapper>
      <Routes />
    </ApolloWrapper>
  )
}

export default App
