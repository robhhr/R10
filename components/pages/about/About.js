import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Header, Wrapper } from '../../index'
import styles from './About.styles'

const About = () => {
  const EVENT_INFORMATION = gql`
    {
      allConducts {
        id
        description
        title
        order
      }
    }
  `

  const { loading, error, data } = useQuery(EVENT_INFORMATION)

  const [toggle, setToggle] = useState(false)

  const triggerToggle = () => {
    setToggle(toggle === false)
  }

  return loading ? (
    <Header>loading</Header>
  ) : error ? (
    <Header>error</Header>
  ) : (
    <Wrapper>
      {data.allConducts.map(({ id, title, description }) => (
        <View key={id}>
          <TouchableOpacity onPress={triggerToggle}>
            <Text style={styles.conduct}>{title}</Text>
          </TouchableOpacity>
          {toggle ? <Text>{description}</Text> : null}
        </View>
      ))}
    </Wrapper>
  )
}

export default About
