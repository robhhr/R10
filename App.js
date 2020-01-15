import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {About} from './components/pages/index';
import ApolloWrapper from './apollo/Apollo';

const App = () => {
  return (
    <ApolloWrapper>
      <About />
    </ApolloWrapper>
  );
};

const styles = StyleSheet.create({});

export default App;
