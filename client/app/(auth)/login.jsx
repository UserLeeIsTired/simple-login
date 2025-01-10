import { View, Text, SafeAreaView, Image } from 'react-native'
import images from '../../constant/images'
import React, { useState } from 'react'
import FormField from '../../components/FormField';

const index = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  });
  
  return (
    <SafeAreaView className="h-full w-full bg-black justify-center">
      <View className="items-center justify-center"> 
        <Image source={images.locked} className="w-16 h-[100px] mb-10" resizeMethod='contain'/>
        <Text className="text-2xl text-white text-center font-semibold">Welcome to simple login testing</Text>
        <View className="items-center justify-center">
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          placeholder='Email'
          additionalStyle="mt-7 w-full p-[6px]"
        />
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder='Password'
          additionalStyle="w-full p-[6px]"
        />
        
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index