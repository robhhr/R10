import React, { useState, useContext } from 'react'
import { Image, Text, View, StyleSheet, Linking } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import {
  Author,
  Title,
  SessionTitle,
  SessionText,
  ModalTitle,
  AboutText,
} from '../../Typography'
import { Button, FavoriteButton, Wrapper } from '../../index'
import { FavoritesContext } from '../../../context/favorites'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import ModalContainer from '../../Modal'
import styles from './Session.styles'

const infoSession = id => {
  const SESSION = gql`
    query SelectedSession($id: ID!) {
      Session(id: $id) {
        id
        startTime
        location
        title
        description
        speaker {
          name
          image
          id
          bio
          url
        }
      }
    }
  `

  const { loading, error, data } = useQuery(SESSION, { variables: { id } })

  return { data: data ? data.Session : null, loading, error }
}

const Session = ({ navigation, id }) => {
  const [toggle, setToggle] = useState(false)
  const triggerToggle = () => {
    setToggle(toggle === false)
  }

  const { error, loading, data } = infoSession(navigation.getParam('id'))

  const { favorites, addFavs, removeFavs } = useContext(FavoritesContext)

  return (
    <Wrapper>
      {loading ? (
        <Title>loading</Title>
      ) : error ? (
        <Title>error</Title>
      ) : data ? (
        <>
          <View style={styles.favoriteContainer}>
            <Text style={styles.location}>{data.location}</Text>
            <FavoriteButton id={data.id} />
          </View>
          <SessionTitle>{data.title}</SessionTitle>
          <Text style={styles.time}>
            {new Date(data.startTime).toLocaleString('en-US', {
              hour: 'numeric',
              hour12: true,
            })}
          </Text>
          <SessionText>{data.description}</SessionText>
          <Text style={styles.location}>Presented by: </Text>
          <TouchableOpacity style={styles.author} onPress={triggerToggle}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{ uri: data.speaker.image }}
            />
            <Author>{data.speaker.name}</Author>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSeparator}>
            <ModalContainer open={toggle} onClose={setToggle}>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 80,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginVertical: 20,
                }}
                source={{ uri: data.speaker.image }}
              />
              <ModalTitle>{data.speaker.name}</ModalTitle>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  lineHeight: 35,
                  marginBottom: 10,
                }}>
                {data.speaker.bio}
              </Text>
              <TouchableOpacity style={styles.buttonSeparator}>
                <View style={styles.buttonContainer}>
                  <LinearGradient
                    colors={['#9963ea', '#8797D6']}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    style={styles.button}>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(data.speaker.url)}>
                      <Text style={styles.buttonText}>
                        Read More on Wikipedia
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </ModalContainer>
          </TouchableOpacity>
          <Button id={data.id} />
        </>
      ) : null}
    </Wrapper>
  )
}

export default Session
