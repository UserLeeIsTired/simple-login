import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity className="bg-green-600 w-full p-2" onPress={onPress}>
        <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton