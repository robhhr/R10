import React from 'react';
import {View, Text} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const About = () => {
  const EVENT_INFORMATION = gql`
    {
      allConducts {
        id
        description
        title
        order
      }
    }
  `;

  const {loading, error, data} = useQuery(EVENT_INFORMATION);

  return loading ? (
    <Text>nada</Text>
  ) : error ? (
    <Text>error</Text>
  ) : (
    <View>
      {data.allConducts.map(({title, description}) => (
        <View key={title}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
      ))}
    </View>
  );
};

export default About;
