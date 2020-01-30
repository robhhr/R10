import React, { useState, useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import {
  Author,
  Title,
  SessionTitle,
  SessionText,
  AboutText,
} from '../../Typography'
import { Button, FavoriteButton, Wrapper } from '../../index'
import { FavoritesContext } from '../../../context/favorites'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
          <Text style={styles.time}>{data.startTime}</Text>
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
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{ uri: data.speaker.image }}
              />
              <Title>{data.speaker.name}</Title>
              <Title>{data.speaker.bio}</Title>
            </ModalContainer>
          </TouchableOpacity>
          <Button id={data.id} />
        </>
      ) : null}
    </Wrapper>
  )
}

export default Session
