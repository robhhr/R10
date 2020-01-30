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
      <Modal visible={open} transparent={false} animationType="slide">
        <SafeAreaView style={{ backgroundColor: 'black', height: '100%' }}>
          <Text style={{ color: 'white' }}>About the Speaker</Text>
          <View style={{ backgroundColor: 'white', marginHorizontal: 10 }}>
            <Title>x</Title>
            <Title>{children}</Title>
            <TouchableOpacity onPress={onClose}></TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  )
}

export default ModalContainer
