import React from 'react'
import { Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Wrapper from '../../index'

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
    <Wrapper>
      <Text>favorites</Text>
    </Wrapper>
  )
}

export default Favorites
