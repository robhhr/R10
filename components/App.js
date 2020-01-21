import React from 'react'
import ApolloWrapper from '../apollo/Apollo'
import Routes from '../navigation/Routes'
import FavoritesContextProvider from '../context/favorites'

const App = () => {
  return (
    <ApolloWrapper>
      {/* <FavoritesContextProvider> */}
      <Routes />
      {/* </FavoritesContextProvider> */}
    </ApolloWrapper>
  )
}

export default App
