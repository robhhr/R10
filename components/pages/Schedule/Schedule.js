import React from 'react'
import { View, Text, SafeAreaView, SectionList } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Title } from '../../Typography'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './Schedule.styles'

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

  const reduceSessionsToHeaders = (headers, session) => {
    const sectionIndex = headers.findIndex(
      ({ title }) => title === session.startTime,
    )

    if (sectionIndex === -1)
      return [
        ...headers,
        {
          title: session.startTime,
          data: [session],
        },
      ]

    headers[sectionIndex].data.push(session)

    return headers
  }

  const { loading, error, data } = useQuery(EVENT_INFORMATION)
  return (
    <View>
      {loading ? (
        <Title>loading</Title>
      ) : error ? (
        <Title>error</Title>
      ) : (
        <View>
          <SectionList
            sections={data.allSessions.reduce(reduceSessionsToHeaders, [])}
            style={styles.sessions}
            keyExtractor={({ id }) => id}
            renderItem={({ item: { id, title, location } }, i) => (
              <View style={styles.sessionContainer}>
                <Text key={id} title={title} style={styles.individualSession}>
                  {title}
                </Text>
                <Text style={styles.location}>{location}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.time}>
                <Text style={styles.sessionTime}>{title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  )
}

const Schedule = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Conference />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Schedule
