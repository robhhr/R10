import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Wrapper } from '../../index'
import { Title, AboutText, Conduct } from '../../Typography'

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

  return (
    <Wrapper>
      <AboutText>
        R10 is a conference that focuses on just about any topic related to dev.
      </AboutText>
      <Title>Date Venue</Title>
      <AboutText>
        The R10 conference will take place on Tuesday, June, 2020 in Vancouver,
        BC.
      </AboutText>
      <Title>Code of Conduct</Title>
      {loading ? (
        <Title>loading</Title>
      ) : error ? (
        <Title>error</Title>
      ) : (
        <View>
          {data.allConducts.map(({ id, title, description }) => (
            <View key={id}>
              <TouchableOpacity onPress={triggerToggle}>
                <Conduct>
                  {toggle ? '- ' : '+ '}
                  {title}
                </Conduct>
              </TouchableOpacity>
              {toggle ? <AboutText>{description}</AboutText> : null}
            </View>
          ))}
        </View>
      )}
      <AboutText>RED Academy 2020</AboutText>
    </Wrapper>
  )
}

export default About
