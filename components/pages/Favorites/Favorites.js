import React from 'react'
import { Text, View, SectionList, TouchableOpacity } from 'react-native'
import { Title } from '../../Typography'
import { FavoriteButton } from '../../index'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Wrapper } from '../../index'

const Favorites = () => {
  const SESSIONS = gql`
    {
      allSessions {
        id
        startTime
        location
        title
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

  const { loading, error, data } = useQuery(SESSIONS)

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
            keyExtractor={({ id }) => id}
            renderItem={({ item: { id, title, location } }, i) => (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.push('Session', { id })}>
                  <Text key={id} title={title}>
                    {title}
                  </Text>
                </TouchableOpacity>
                <View>
                  <Text>{location}</Text>
                  <FavoriteButton id={id} />
                </View>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View>
                <Text>{title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </>
  )
}

export default Favorites
