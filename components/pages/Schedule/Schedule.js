import React from 'react'
import { View, Text, SafeAreaView, SectionList, Platform } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Title } from '../../Typography'
import { FavoriteButton } from '../../index'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import styles from './Schedule.styles'

const Conference = ({ navigation, ...props }) => {
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
  console.log(navigation)
  return (
    <>
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
                <TouchableOpacity
                  onPress={() => navigation.push('Session', { id })}>
                  <Text
                    key={id}
                    title={title}
                    style={
                      Platform.OS === 'android'
                        ? styles.androidSession
                        : styles.individualSession
                    }>
                    {title}
                  </Text>
                </TouchableOpacity>
                <View style={styles.favoriteContainer}>
                  <Text
                    style={
                      Platform.OS === 'android'
                        ? styles.androidLocation
                        : styles.location
                    }>
                    {location}
                  </Text>
                  <FavoriteButton id={id} />
                </View>
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
    </>
  )
}

const Schedule = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Conference navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Schedule
