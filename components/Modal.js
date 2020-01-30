import React, { useState } from 'react'
import {
  Modal,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native'
import Wrapper from './Wrapper'
import { Title } from './Typography'

const ModalContainer = ({ children, open = false, onClose, ...props }) => {
  return (
    <View>
      <ScrollView>
        <Modal visible={open} transparent={false} animationType="slide">
          <SafeAreaView
            style={{
              backgroundColor: 'black',
              height: '100%',
            }}>
            <View
              style={{
                position: 'relative',
                marginTop: 30,
                width: '100%',
              }}>
              <TouchableOpacity onPress={onClose}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    position: 'absolute',
                    left: 25,
                    zIndex: 999,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 20,
                  textAlign: 'center',
                  zIndex: -999,
                }}>
                About the Speaker
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                marginHorizontal: 20,
                marginVertical: 35,
                borderRadius: 5,
              }}>
              <Title>{children}</Title>
            </View>
          </SafeAreaView>
        </Modal>
      </ScrollView>
    </View>
  )
}

export default ModalContainer
