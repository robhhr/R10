import React from 'react'
import { Image, Text, View } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Title, AboutText } from '../../Typography'
import { Wrapper } from '../../index'

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

const Session = ({ navigation }) => {
  const { error, loading, data } = infoSession(navigation.getParam('id'))
  return (
    <Wrapper>
      {loading ? (
        <Title>loading</Title>
      ) : error ? (
        <Title>error</Title>
      ) : data ? (
        <>
          <Title>{data.location}</Title>
          <Title>{data.title}</Title>
          <Title>{data.startTime}</Title>
          <Title>{data.description}</Title>
          <AboutText>Presented by: </AboutText>
          <View>
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{ uri: data.speaker.image }}
            />
          </View>
          <Title>{data.speaker.name}</Title>
        </>
      ) : null}
    </Wrapper>
  )
}

export default Session
