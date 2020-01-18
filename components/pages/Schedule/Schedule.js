import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Header, Logo, Wrapper } from '../../index'
import {
  Title,
  AboutText,
  Conduct,
  PageTitle,
  REDFooter,
} from '../../Typography'
import { ScrollView } from 'react-native-gesture-handler'

const Conference = () => {
  const EVENT_INFORMATION = gql`
    {
      allSessions {
        id
        startTime
        title
        location
      }
    }
  `

  const { loading, error, data } = useQuery(EVENT_INFORMATION)
  return (
    <ScrollView>
      {loading ? (
        <Title>loading</Title>
      ) : error ? (
        <Title>error</Title>
      ) : (
        <View>
          {data.allSessions.map(({ id, startTime, title, location }) => (
            <Text
              key={id}
              title={title}
              style={{
                color: 'black',
                backgroundColor: 'grey',
              }}>
              {title} {location}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  )
}

const Schedule = () => {
  return (
    <ScrollView>
      <Conference />
    </ScrollView>
  )
}

export default Schedule
