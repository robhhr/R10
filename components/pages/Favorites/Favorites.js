import React, { useContext } from 'react'
import { Text, View, SectionList, TouchableOpacity } from 'react-native'
import { Title } from '../../Typography'
import { FavoriteButton } from '../../index'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Wrapper } from '../../index'
import FavoritesContextProvider, {
  FavoritesContext,
} from '../../../context/favorites'
import styles from '../Schedule/Schedule.styles'

const Favorites = ({ navigation }) => {
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

  const { favorites } = useContext(FavoritesContext)

  return (
    <>
      {loading ? (
        <Title>loading</Title>
      ) : error ? (
        <Title>error</Title>
      ) : (
        <View style={styles.mainContainer}>
          <SectionList
            style={styles.sessions}
            sections={data.allSessions
              .filter(({ id }) => favorites.includes(id))
              .reduce(reduceSessionsToHeaders, [])}
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

export default Favorites
