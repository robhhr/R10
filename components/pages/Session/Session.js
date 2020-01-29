import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Title, AboutText } from '../../Typography'
import { FavoriteButton, Wrapper } from '../../index'
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
          <Title>{data.title}</Title>
          <Title>{data.startTime}</Title>
          <Title>{data.description}</Title>
          <AboutText>Presented by: </AboutText>
          <TouchableOpacity onPress={triggerToggle}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{ uri: data.speaker.image }}
            />
            <Title>{data.speaker.name}</Title>
          </TouchableOpacity>
          <TouchableOpacity>
            <ModalContainer open={toggle} onClose={setToggle}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{ uri: data.speaker.image }}
              />
              <Title>{data.speaker.name}</Title>
              <Title>{data.speaker.bio}</Title>
            </ModalContainer>
          </TouchableOpacity>
        </>
      ) : null}
    </Wrapper>
  )
}

export default Session
