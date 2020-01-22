import React from 'react'
import { Text } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Title } from '../../Typography'
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
        <Title>{data.title}</Title>
      ) : null}
    </Wrapper>
  )
}

export default Session
