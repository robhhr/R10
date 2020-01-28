import React from 'react'
import ApolloWrapper from '../apollo/Apollo'
import Routes from '../navigation/Routes'
import FavoritesContextProvider from '../context/favorites'
import Navigation from '../navigation/Navigation'

const App = () => {
  return (
    <ApolloWrapper>
      <FavoritesContextProvider>
        {/* <Routes /> */}
        <Navigation />
      </FavoritesContextProvider>
    </ApolloWrapper>
  )
}

export default App
