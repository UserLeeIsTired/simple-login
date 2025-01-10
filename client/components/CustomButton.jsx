import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity className="bg-green-600 w-[98%] h-12 rounded-xl mt-5 p-[6px]" onPress={onPress}>
        <View className="w-full">
            <Text className="font-semibold text-lg text-center text-white">{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton