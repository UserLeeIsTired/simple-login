import { View, Text, SafeAreaView, Image, Alert } from 'react-native'
import images from '../../constant/images'
import React, { useState } from 'react'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const submit = async () => {
    console.log('hello');
    if (!form.email || !form.email){
      Alert.alert('Error', 'Please enter all fields!');
      return;
    }

    // TODO: sign-up function connect to database
  }
  
  return (
    <SafeAreaView className="h-full w-full bg-black justify-center">
      <View className="items-center justify-center"> 
        <Image source={images.locked} className="w-16 h-[100px] mb-10" resizeMethod='contain'/>
        <Text className="text-2xl text-white text-center font-semibold">Login</Text>
        <View className="items-center justify-center">
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          placeholder=''
          additionalStyle="mt-7 w-full p-[6px]"
        />
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder=''
          additionalStyle="w-full p-[6px]"
        />
        <FormField 
          title="Confirm Password"
          value={form.confirmPassword}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder=''
          additionalStyle="w-full p-[6px]"
        />
        <CustomButton title='Submit' onPress={submit}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp