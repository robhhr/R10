import React, {useState} from 'react'
import {
   View,
   Text,
   StyleSheet,
   SafeAreaView,
   ScrollView,
   TouchableOpacity,
} from 'react-native'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

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

   const {loading, error, data} = useQuery(EVENT_INFORMATION)

   const [toggle, setToggle] = useState(false)

   const triggerToggle = () => {
      setToggle(toggle === false)
   }

   return loading ? (
      <SafeAreaView style={styles.container}>
         <Text>loading</Text>
      </SafeAreaView>
   ) : error ? (
      <SafeAreaView style={styles.container}>
         <Text>error</Text>
      </SafeAreaView>
   ) : (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>
            <View>
               {data.allConducts.map(({id, title, description}) => (
                  <View key={id}>
                     <TouchableOpacity onPress={triggerToggle}>
                        <Text>{title}</Text>
                     </TouchableOpacity>
                     {toggle ? <Text>{description}</Text> : null}
                  </View>
               ))}
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   scrollView: {
      backgroundColor: 'pink',
   },
})

export default About
