import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Header, Logo, Wrapper } from '../../index'
import { Title, AboutText, Conduct, PageTitle } from '../../Typography'

const Collapsible = ({ title, children, ...props }) => {
  const [toggle, setToggle] = useState(false)

  const triggerToggle = () => {
    setToggle(toggle === false)
  }

  return (
    <>
      <TouchableOpacity onPress={triggerToggle} {...props}>
        <Conduct>
          {toggle ? '- ' : '+ '}
          {title}
        </Conduct>
      </TouchableOpacity>
      {toggle ? <AboutText>{children}</AboutText> : null}
    </>
  )
}

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

  return (
    <ScrollView>
      <Header>
        <PageTitle>About</PageTitle>
      </Header>
      <Wrapper>
        <Logo />
        <AboutText>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </AboutText>
        <Title>Date Venue</Title>
        <AboutText>
          The R10 conference will take place on Tuesday, June, 2020 in
          Vancouver, BC.
        </AboutText>
        <Title>Code of Conduct</Title>
        {loading ? (
          <Title>loading</Title>
        ) : error ? (
          <Title>error</Title>
        ) : (
          <View>
            {data.allConducts.map(({ id, title, description }) => (
              <Collapsible key={id} title={title}>
                {description}
              </Collapsible>
            ))}
          </View>
        )}
        <AboutText>RED Academy 2020</AboutText>
      </Wrapper>
    </ScrollView>
  )
}

export default About
