import React, { useState } from 'react'
import { Modal, TouchableOpacity, ScrollView, View } from 'react-native'
import Wrapper from './Wrapper'
import { Title } from './Typography'

const ModalContainer = ({ children, open = false, onClose, ...props }) => {
  return (
    <Wrapper>
      <Modal visible={open} transparent={false} animationType="slide">
        <Title>About the Speaker</Title>
        <Title>{children}</Title>
        <TouchableOpacity onPress={onClose}>
          <Title>Hide Modal</Title>
        </TouchableOpacity>
      </Modal>
    </Wrapper>
  )
}

export default ModalContainer
