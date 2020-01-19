import React from 'react'
import { View, Text, SafeAreaView, SectionList } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Header, Logo, Wrapper } from '../../index'
import { Title } from '../../Typography'
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
            keyExtractor={({ id }) => id}
            renderItem={({ item: { id, title, location } }, i) => (
              <View>
                <Text
                  key={id}
                  title={title}
                  style={{
                    color: 'black',
                    backgroundColor: 'grey',
                    borderWidth: 2,
                  }}>
                  {title} {location}
                </Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text>{title}</Text>
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
