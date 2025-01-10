import { View, Text, SafeAreaView, Image } from 'react-native'
import { router } from 'expo-router';
import images from '../constant/images'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';

const index = () => {  
  return (
    <SafeAreaView className="h-full w-full bg-black justify-center">
      <View className="items-center justify-center"> 
        <Image source={images.locked} className="w-16 h-[100px] mb-10" resizeMethod='contain'/>
        <Text className="text-2xl text-white text-center font-semibold">Welcome to simple login testing</Text>
        <View className="items-center justify-center">
            <CustomButton title='Next' onPress={() => router.push('./login')}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index