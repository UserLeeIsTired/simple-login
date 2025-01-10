import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SecondaryButton = ({ title, handlePress, containerStyle}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        className={`min-h-[50px] justify-center content-center ${containerStyle}`}>
        <Text className="font-light text-sm text-center text-white underline">{title}</Text>
    </TouchableOpacity>
  )
}

export default SecondaryButton